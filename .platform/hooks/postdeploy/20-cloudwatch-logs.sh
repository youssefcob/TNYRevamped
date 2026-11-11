#!/bin/bash
# Ship php-fpm's error log (LOG_CHANNEL=errorlog -> Laravel's errors land there; Beanstalk's own
# log streaming does not include it) to CloudWatch. Runs AFTER Beanstalk's log-streaming step,
# which rewrites the agent's config directory on every deploy (so this re-appends every deploy).
# Also the queue worker's and the SSR process's logs (systemd units append to them).
# No audit stream for this app (PHI = No, docs/TNY-V2-MIGRATION.md §6).
set -euo pipefail
ENV_NAME=$(/opt/elasticbeanstalk/bin/get-config container -k environment_name)
CFG_DIR=/etc/tny
CFG=$CFG_DIR/cloudwatch-logs.json
mkdir -p "$CFG_DIR"
cat > "$CFG" <<JSON
{
  "logs": {
    "logs_collected": {
      "files": {
        "collect_list": [
          {
            "file_path": "/var/log/php-fpm/www-error.log",
            "log_group_name": "/aws/elasticbeanstalk/${ENV_NAME}/var/log/php-fpm/www-error.log",
            "log_stream_name": "{instance_id}",
            "timezone": "UTC",
            "retention_in_days": 731
          },
          {
            "file_path": "/var/log/tny-worker.log",
            "log_group_name": "/aws/elasticbeanstalk/${ENV_NAME}/var/log/tny-worker.log",
            "log_stream_name": "{instance_id}",
            "timezone": "UTC",
            "retention_in_days": 731
          },
          {
            "file_path": "/var/log/tny-ssr.log",
            "log_group_name": "/aws/elasticbeanstalk/${ENV_NAME}/var/log/tny-ssr.log",
            "log_stream_name": "{instance_id}",
            "timezone": "UTC",
            "retention_in_days": 731
          }
        ]
      }
    }
  }
}
JSON
chmod 0644 "$CFG"
/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a append-config -m ec2 -s -c "file:$CFG" >/dev/null
# append-config restarts the agent; give it a moment before judging it.
for _ in $(seq 1 15); do
  if systemctl is-active --quiet amazon-cloudwatch-agent; then
    echo "cloudwatch-logs: agent running; shipping php-fpm errors, worker and SSR logs for ${ENV_NAME}"
    exit 0
  fi
  sleep 2
done
# Do not fail the deployment over log shipping; make it visible instead.
echo "cloudwatch-logs: WARNING agent not active 30s after append-config" >&2
systemctl status amazon-cloudwatch-agent --no-pager 2>&1 | tail -n 5 >&2 || true
exit 0
