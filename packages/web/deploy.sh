#!/usr/bin/env bash

cd "$(dirname "$0")"

gcloud app deploy app.yaml --quiet