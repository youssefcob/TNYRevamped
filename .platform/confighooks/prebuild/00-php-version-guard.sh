#!/bin/bash
# Refuse to deploy on any PHP build other than the ones cleared after the
# October 2026 PHP vulnerability. The Beanstalk platform is pinned in Terraform
# (environments/production/tny.tf); this is the belt to that
# braces: a managed platform update can never move us to an unlisted build.
set -euo pipefail
ALLOWED="8.2.35 8.3.36 8.4.27 8.5.12"
CURRENT=$(php -r 'echo PHP_VERSION;')
for v in $ALLOWED; do
  if [ "$CURRENT" = "$v" ]; then
    echo "php-version-guard: PHP $CURRENT is on the allowed list"
    exit 0
  fi
done
echo "php-version-guard: PHP $CURRENT is NOT allowed (allowed: $ALLOWED). Refusing to deploy." >&2
exit 1
