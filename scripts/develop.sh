#!/usr/bin/env bash

# Exit on any command failure and propagate pipe errors
set -e

cleanup() {
  echo "Cleaning up..."
  pkill -P $$
}
trap cleanup EXIT

# Start hot reload in background
fd . --exclude output | entr ./scripts/build.sh &

# Delay to finish build
sleep 1

# Start server
deno run --allow-all npm:serve output
