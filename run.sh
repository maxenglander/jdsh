#!/usr/bin/env bash
. .env
COLS=$COLS EMAILS=$EMAILS PORT=$PORT ROWS=$ROWS node server.js
