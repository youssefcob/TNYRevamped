#!/bin/bash
# php.ini overrides. memory_limit and max_execution_time are set by Terraform through the
# platform's phpini namespace; these are the ones that namespace does not cover.
# Largest uploads the app accepts: resumes 2 MB (mimes:pdf,doc,docx|max:2048), admin images
# (several per request on the content pages).
set -euo pipefail
cat > /etc/php.d/99-tny.ini <<'INI'
upload_max_filesize = 8M
post_max_size = 20M
max_input_time = 120
INI
echo "php-ini: wrote /etc/php.d/99-tny.ini"
