#!/usr/bin/env bash
# 一键启动「福建，一年的风土」本地预览
set -e
cd "$(dirname "$0")"
PORT="${1:-8000}"
echo "启动本地预览：http://localhost:${PORT}"
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "${PORT}"
else
  npx serve -l "${PORT}" .
fi
