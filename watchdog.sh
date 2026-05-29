#!/bin/bash
cd /home/z/my-project
while true; do
  fuser -k 3000/tcp 2>/dev/null
  sleep 1
  node node_modules/.bin/next dev -p 3000 > /home/z/my-project/dev.log 2>&1 &
  SERVER_PID=$!
  echo "[$(date)] Server started: $SERVER_PID"
  
  # Wait for server to be ready
  for i in $(seq 1 30); do
    if curl -s -m 2 http://127.0.0.1:3000 > /dev/null 2>&1; then
      echo "[$(date)] Server ready"
      break
    fi
    sleep 1
  done
  
  # Wait for server to die
  while kill -0 $SERVER_PID 2>/dev/null; do
    sleep 2
  done
  
  echo "[$(date)] Server died, restarting..."
  sleep 1
done
