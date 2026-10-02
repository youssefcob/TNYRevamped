web: php artisan inertia:start-ssr & (while true; do php artisan queue:work --tries=3 --max-time=3600 --memory=128; sleep 1; done) & vendor/bin/heroku-php-apache2 public/
release: php artisan migrate --force
