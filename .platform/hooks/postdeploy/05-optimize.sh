#!/bin/bash
# Laravel caches (config, events, routes, views). Built HERE, after the app has been moved
# to /var/app/current, because the caches embed absolute paths (authorization-system,
# 1 Nov 2026: caches built in the staging directory gave a 500 on every request).
set -euo pipefail
cd /var/app/current
# Routes, views and events are cached; the CONFIG is deliberately NOT cached (no `optimize`):
# the app calls env() outside config files (app/Services/GoogleSheets.php, GoogleDrive.php read
# GOOGLE_APPLICATION_CREDENTIALS / GOOGLE_CREDENTIALS_BASE64 at run time). With a cached config
# Laravel stops loading .env, and the systemd queue worker has no Beanstalk properties in its
# environment, so env() returned null in the worker and the Google Sheet job failed
# (14 Nov 2026, first real submission after cutover). Heroku never cached the config.
sudo -u webapp php artisan config:clear --no-interaction
sudo -u webapp php artisan route:cache --no-interaction
sudo -u webapp php artisan view:cache --no-interaction
sudo -u webapp php artisan event:cache --no-interaction
# php-fpm's opcache keeps the old compiled files; a reload makes every worker pick up the new caches.
systemctl reload php-fpm 2>/dev/null || systemctl restart php-fpm || true
curl -s -o /dev/null -w "optimize: local /up -> %{http_code}\n" http://127.0.0.1/up || true
