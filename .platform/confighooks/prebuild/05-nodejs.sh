#!/bin/bash
# Node.js for the Inertia SSR process (tny-ssr.service, written by postdeploy/15-ssr.sh). The
# Beanstalk PHP platform ships no Node; AL2023 provides namespaced packages (nodejs20/22/24) and a
# version-stable binary name, /usr/bin/node-22, whatever `alternatives` points `node` at:
# https://docs.aws.amazon.com/linux/al2023/ug/nodejs.html
# Node is NOT used to build anything here: the Vite assets are built in CI and shipped in the bundle.
set -euo pipefail
if [ "$(/opt/elasticbeanstalk/bin/get-config environment -k INERTIA_SSR_ENABLED 2>/dev/null || echo true)" != "true" ]; then
  echo "nodejs: INERTIA_SSR_ENABLED is not true, nothing to install"; exit 0
fi
if command -v node-22 >/dev/null 2>&1; then
  echo "nodejs: $(node-22 -v) already installed"
else
  dnf install -y -q nodejs22 >/dev/null
  echo "nodejs: installed $(node-22 -v)"
fi
