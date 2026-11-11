#!/bin/bash
# The queue worker. On Heroku the Procfile ran it in the background of the single web dyno:
#   (while true; do php artisan queue:work --tries=3 --max-time=3600 --memory=128; sleep 1; done)
# Here it is a systemd unit on EVERY web instance (decision D10, 11 Nov 2026): same command,
# Restart=always replaces the shell loop. The database queue locks jobs, so several
# instances each running one worker is safe. Restarted on every deploy so new code is
# picked up (queue:work finishes the job in hand on SIGTERM).
# No scheduler: routes/console.php only holds Laravel's sample `inspire` command; no Scheduler add-on on Heroku.
set -euo pipefail
UNIT=/etc/systemd/system/tny-worker.service
cat > "$UNIT" <<'UNIT'
[Unit]
Description=tny Laravel queue worker (ran inside the Heroku web dyno)
After=network-online.target
Wants=network-online.target
# Never give up: systemd's default start-rate limit (5 in 10 s) parked the unit as "failed"
# while the database had no tables yet (ptofthecity, 5 Nov 2026). The Heroku loop never stopped.
StartLimitIntervalSec=0

[Service]
User=webapp
Group=webapp
WorkingDirectory=/var/app/current
ExecStart=/usr/bin/php /var/app/current/artisan queue:work --tries=3 --max-time=3600 --memory=128 --sleep=3
Restart=always
RestartSec=1
KillSignal=SIGTERM
TimeoutStopSec=90
StandardOutput=append:/var/log/tny-worker.log
StandardError=append:/var/log/tny-worker.log

[Install]
WantedBy=multi-user.target
UNIT
touch /var/log/tny-worker.log; chown webapp:webapp /var/log/tny-worker.log; chmod 0640 /var/log/tny-worker.log
systemctl daemon-reload
systemctl enable tny-worker >/dev/null 2>&1 || true
systemctl restart tny-worker
sleep 2
systemctl is-active --quiet tny-worker && echo "worker: tny-worker.service running" || { echo "worker: unit failed to start" >&2; journalctl -u tny-worker -n 20 --no-pager >&2; exit 1; }
