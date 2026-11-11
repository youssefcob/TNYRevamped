#!/bin/bash
# Laravel needs writable storage/ and bootstrap/cache. container_commands ran
# as root before this hook, so hand everything back to the app user.
set -euo pipefail
APP_DIR=$(/opt/elasticbeanstalk/bin/get-config platformconfig -k AppStagingDir 2>/dev/null || echo /var/app/staging)
cd "$APP_DIR"
mkdir -p storage/app/private storage/app/public storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache
chown -R webapp:webapp storage bootstrap/cache
chmod -R u+rwX,g+rwX,o-rwx storage bootstrap/cache
exit 0
