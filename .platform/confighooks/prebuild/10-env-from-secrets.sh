#!/bin/bash
# Build the Laravel .env for this deployment:
#   - every Beanstalk environment property (non-secret config, set by Terraform: tny.tf)
#   - the app secret (APP_KEY, MAIL_PASSWORD, CLOUDINARY_URL/API_KEY/API_SECRET, the Passport key
#     pair, DB_USERNAME/DB_PASSWORD ...) from Secrets Manager
#   - DB_USERNAME / DB_PASSWORD: from the app secret (dedicated user tny_app), else the RDS master
#     secret (which rotates weekly and would break a static .env — authorization-system lesson)
#   - the Google service-account key file the code reads at base_path(GOOGLE_APPLICATION_CREDENTIALS)
#     (app/Services/GoogleSheets.php, GoogleDrive.php): written from GOOGLE_CREDENTIALS_BASE64 in the
#     secret, 0640 webapp, and kept OUT of .env (the code's fallback would otherwise rewrite it under storage/)
#   - PASSPORT_PRIVATE_KEY / PASSPORT_PUBLIC_KEY: one pair for every instance. Composer runs with
#     --no-scripts here, so post-install-cmd's `passport:keys` never mints a per-instance pair
#   - the RDS CA bundle at MYSQL_ATTR_SSL_CA (config/database.php passes it as PDO::MYSQL_ATTR_SSL_CA;
#     the RDS parameter group requires TLS)
# Secrets are read through the instance role at deploy time and land only in root/webapp-owned
# 0640 files; they are never in the bundle, Terraform or GitHub.
set -euo pipefail
APP_DIR=$(/opt/elasticbeanstalk/bin/get-config platformconfig -k AppStagingDir 2>/dev/null || echo /var/app/staging)
ENV_FILE="$APP_DIR/.env"
CA=$(/opt/elasticbeanstalk/bin/get-config environment -k MYSQL_ATTR_SSL_CA 2>/dev/null || echo /etc/pki/rds/global-bundle.pem)
if [ ! -s "$CA" ]; then
  mkdir -p "$(dirname "$CA")"
  curl -fsS --retry 3 -o "$CA.tmp" https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem && mv "$CA.tmp" "$CA"
  chmod 0644 "$CA"
  echo "env-from-secrets: downloaded the RDS trust bundle to $CA"
fi
umask 077
python3 - "$APP_DIR" "$ENV_FILE" <<'PY'
import base64, json, os, subprocess, sys

app_dir, env_file = sys.argv[1], sys.argv[2]
props = json.loads(subprocess.check_output(["/opt/elasticbeanstalk/bin/get-config", "environment"]))
region = props.get("AWS_DEFAULT_REGION", "us-east-1")


def secret(arn):
    raw = subprocess.check_output(
        ["aws", "secretsmanager", "get-secret-value", "--region", region,
         "--secret-id", arn, "--query", "SecretString", "--output", "text"])
    return json.loads(raw)


values = dict(props)
if props.get("APP_SECRET_ARN"):
    values.update(secret(props["APP_SECRET_ARN"]))
if "DB_PASSWORD" not in values and props.get("DB_SECRET_ARN"):
    db = secret(props["DB_SECRET_ARN"])
    values["DB_USERNAME"] = db["username"]
    values["DB_PASSWORD"] = db["password"]
for k in ("APP_SECRET_ARN", "DB_SECRET_ARN"):
    values.pop(k, None)

# Google service-account key -> the file named by GOOGLE_APPLICATION_CREDENTIALS, at the app root
sa_name = values.get("GOOGLE_APPLICATION_CREDENTIALS", "tny-service-account.json")
b64 = values.pop("GOOGLE_CREDENTIALS_BASE64", None)
if b64:
    path = os.path.join(app_dir, sa_name)
    with open(path, "wb") as f:
        f.write(base64.b64decode(b64))
    os.chmod(path, 0o640)
    print(f"env-from-secrets: wrote {sa_name}")
else:
    print("env-from-secrets: WARNING no GOOGLE_CREDENTIALS_BASE64 in the app secret; resume uploads and sheet rows will fail", file=sys.stderr)

if not ("PASSPORT_PRIVATE_KEY" in values and "PASSPORT_PUBLIC_KEY" in values):
    print("env-from-secrets: WARNING no Passport key pair in the app secret; API tokens will not work across instances", file=sys.stderr)


def quote(v):
    v = str(v)
    return '"' + v.replace("\\", "\\\\").replace('"', '\\"') + '"'


with open(env_file, "w") as f:
    for k in sorted(values):
        f.write(f"{k}={quote(values[k])}\n")
print(f"env-from-secrets: wrote {len(values)} keys to {env_file}")
PY
chown webapp:webapp "$ENV_FILE"
chmod 0640 "$ENV_FILE"
SA=$(/opt/elasticbeanstalk/bin/get-config environment -k GOOGLE_APPLICATION_CREDENTIALS 2>/dev/null || echo tny-service-account.json)
[ -f "$APP_DIR/$SA" ] && chown webapp:webapp "$APP_DIR/$SA" && chmod 0640 "$APP_DIR/$SA"
exit 0
