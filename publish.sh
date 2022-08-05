#!/bin/bash
GLOBIGNORE="build"

make clean all
git checkout -f gh-pages
git rm -rf ./*
mv build/* .
rm -rf build/
git add .
git commit --amend --date=now -m "Update site"
git push --force
git checkout -f main
