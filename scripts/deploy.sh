#!/usr/bin/env bash

./scripts/build.sh
git subtree push --prefix dist origin gh-pages
