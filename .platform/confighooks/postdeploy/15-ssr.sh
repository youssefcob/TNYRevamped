#!/bin/bash
# Inertia SSR. On Heroku the Procfile ran `php artisan inertia:start-ssr &` in the web dyno; that
# command is `node bootstrap/ssr/ssr.js` behind a PHP process wrapper (inertia-laravel StartSsr),
# listening on 127.0.0.1:13714. Here the same bundle runs as a systemd unit on EVERY web instance
# (decision D8, 11 Nov 2026), restarted on every deploy so the new bundle is served. If the unit is
# down, inertia-laravel's HttpGateway returns null and the page renders client-side — never an error.
# INERTIA_SSR_ENABLED=false (Terraform) removes the unit; Laravel then skips the gateway entirely.
set -euo pipefail
UNIT=/etc/systemd/system/tny-ssr.service
ENABLED=$(/opt/elasticbeanstalk/bin/get-config environment -k INERTIA_SSR_ENABLED 2>/dev/null || echo true)
if [ "$ENABLED" != "true" ]; then
  if [ -f "$UNIT" ]; then systemctl disable --now tny-ssr || true; rm -f "$UNIT"; systemctl daemon-reload; fi
  echo "ssr: INERTIA_SSR_ENABLED=$ENABLED, no SSR process on this instance (client-side rendering)"; exit 0
fi
[ -s /var/app/current/bootstrap/ssr/ssr.js ] || { echo "ssr: bootstrap/ssr/ssr.js missing from the bundle (CI must run npm run build:ssr)" >&2; exit 1; }
cat > "$UNIT" <<'UNIT'
[Unit]
Description=tny Inertia SSR server (node bootstrap/ssr/ssr.js on 127.0.0.1:13714)
After=network-online.target
Wants=network-online.target
StartLimitIntervalSec=0

[Service]
User=webapp
Group=webapp
WorkingDirectory=/var/app/current
Environment=NODE_ENV=production
ExecStart=/usr/bin/node-22 /var/app/current/bootstrap/ssr/ssr.js
Restart=always
RestartSec=2
KillSignal=SIGTERM
TimeoutStopSec=20
StandardOutput=append:/var/log/tny-ssr.log
StandardError=append:/var/log/tny-ssr.log

[Install]
WantedBy=multi-user.target
UNIT
touch /var/log/tny-ssr.log; chown webapp:webapp /var/log/tny-ssr.log; chmod 0640 /var/log/tny-ssr.log
systemctl daemon-reload
systemctl enable tny-ssr >/dev/null 2>&1 || true
systemctl restart tny-ssr
for _ in $(seq 1 15); do
  # The Inertia SSR server exposes GET /health ({"status":"OK"}); an empty POST /render would log a fake "Page not found" error.
  if curl -sf -o /dev/null http://127.0.0.1:13714/health; then
    echo "ssr: tny-ssr.service healthy on 127.0.0.1:13714"; exit 0
  fi
  sleep 1
done
systemctl is-active --quiet tny-ssr && { echo "ssr: unit running but /render not answering yet (the app falls back to client-side rendering)"; exit 0; }
echo "ssr: unit failed to start" >&2; journalctl -u tny-ssr -n 20 --no-pager >&2; tail -n 20 /var/log/tny-ssr.log >&2; exit 1
