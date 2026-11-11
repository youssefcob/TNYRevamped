#!/bin/bash
# Laravel caches (config, events, routes, views). Built HERE, after the app has been moved
# to /var/app/current, because the caches embed absolute paths (authorization-system,
# 1 Nov 2026: caches built in the staging directory gave a 500 on every request).
set -euo pipefail
cd /var/app/current
sudo -u webapp php artisan optimize --no-interaction
# php-fpm's opcache keeps the old compiled files; a reload makes every worker pick up the new caches.
systemctl reload php-fpm 2>/dev/null || systemctl restart php-fpm || true
curl -s -o /dev/null -w "optimize: local /up -> %{http_code}\n" http://127.0.0.1/up || true
