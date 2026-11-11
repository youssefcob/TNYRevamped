#!/usr/bin/env bash
# Deploy the current git HEAD to Elastic Beanstalk — the tny web environment.
#
# Replaces `git push heroku`: builds the Vite assets (public/build + the Inertia SSR bundle
# bootstrap/ssr, exactly what Heroku's nodejs buildpack did with `heroku-postbuild`), builds
# the source bundle with `git archive` (so .gitattributes export-ignore decides what ships;
# vendor/ is installed on the instances by the platform) and REPLACES the committed — stale —
# copies of public/build and bootstrap/ssr in the zip with the fresh build, uploads it to
# Beanstalk's bucket, registers one application version and rolls the environment to it.
# SKIP_BUILD=1 ships the committed copies instead (do not do that for production).
#
# Works from a laptop (AWS SSO profile) and from GitHub Actions (OIDC role).
#   AWS_PROFILE=prod deploy/eb-deploy.sh
set -euo pipefail

APP=${EB_APP:-tny}
REGION=${AWS_REGION:-us-east-1}
ENVS=${EB_ENVS:-"tny-production"}
SHA=$(git rev-parse --short=12 HEAD)
LABEL=${VERSION_LABEL:-"$(date -u +%Y%m%d-%H%M%S)-${SHA}"}

if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "WARNING: uncommitted changes are NOT part of the bundle (git archive of HEAD)." >&2
fi

TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
git archive --format=zip --worktree-attributes -o "$TMP/bundle.zip" HEAD
if [ -z "${SKIP_BUILD:-}" ]; then
  command -v node >/dev/null || { echo "node not found: install Node 22 or set SKIP_BUILD=1 (not for production)" >&2; exit 1; }
  echo "building the frontend with node $(node -v) ..."
  npm ci --no-audit --no-fund --loglevel=error
  npm run build
  npm run build:ssr
  [ -s public/build/manifest.json ] && [ -s bootstrap/ssr/ssr.js ] || { echo "build did not produce public/build/manifest.json and bootstrap/ssr/ssr.js" >&2; exit 1; }
  (cd "$TMP" && zip -q -d bundle.zip 'public/build/*' 'bootstrap/ssr/*' >/dev/null 2>&1 || true)
  zip -q -r "$TMP/bundle.zip" public/build bootstrap/ssr
  echo "bundle: fresh public/build ($(find public/build -type f | wc -l) files) + bootstrap/ssr ($(find bootstrap/ssr -type f | wc -l) files)"
else
  echo "WARNING: SKIP_BUILD set - shipping the COMMITTED public/build and bootstrap/ssr (may be stale)" >&2
fi
echo "bundle: $(du -h "$TMP/bundle.zip" | cut -f1) from ${SHA}"

BUCKET=$(aws elasticbeanstalk create-storage-location --region "$REGION" --query S3Bucket --output text)
KEY="${APP}/${LABEL}.zip"
aws s3 cp "$TMP/bundle.zip" "s3://${BUCKET}/${KEY}" --region "$REGION" --only-show-errors

aws elasticbeanstalk create-application-version --region "$REGION" \
  --application-name "$APP" --version-label "$LABEL" --description "git ${SHA}" \
  --source-bundle "S3Bucket=${BUCKET},S3Key=${KEY}" --process >/dev/null

# --process validates .ebextensions / .platform before any environment touches it.
for _ in $(seq 1 36); do
  STATUS=$(aws elasticbeanstalk describe-application-versions --region "$REGION" \
    --application-name "$APP" --version-labels "$LABEL" --query 'ApplicationVersions[0].Status' --output text)
  case "$STATUS" in
    PROCESSED) break ;;
    FAILED) echo "application version failed validation" >&2; exit 1 ;;
  esac
  sleep 5
done
[ "$STATUS" = "PROCESSED" ] || { echo "version still ${STATUS} after 3 min" >&2; exit 1; }
echo "version ${LABEL} registered"

for ENV in $ENVS; do
  aws elasticbeanstalk update-environment --region "$REGION" --environment-name "$ENV" --version-label "$LABEL" >/dev/null
  echo "deploying to ${ENV} ..."
done

# Rolling deploys (one instance at a time, health-gated) can take 15-20 min for
# the web tier; the CLI's built-in waiter gives up after ~13. Poll ourselves.
for _ in $(seq 1 90); do
  # shellcheck disable=SC2086
  PENDING=$(aws elasticbeanstalk describe-environments --region "$REGION" --environment-names $ENVS \
    --query 'length(Environments[?Status!=`Ready`])' --output text)
  [ "$PENDING" = "0" ] && break
  sleep 20
done
aws elasticbeanstalk describe-environments --region "$REGION" --environment-names $ENVS \
  --query 'Environments[].{env:EnvironmentName,version:VersionLabel,status:Status,health:Health,healthStatus:HealthStatus}' --output table

for ENV in $ENVS; do
  DEPLOYED=$(aws elasticbeanstalk describe-environments --region "$REGION" --environment-names "$ENV" --query 'Environments[0].VersionLabel' --output text)
  if [ "$DEPLOYED" != "$LABEL" ]; then
    echo "${ENV} is running ${DEPLOYED}, not ${LABEL} — the deployment was rolled back. Check: aws elasticbeanstalk describe-events --environment-name ${ENV} --max-items 30" >&2
    exit 1
  fi
done
echo "done: ${LABEL} on ${ENVS}"
