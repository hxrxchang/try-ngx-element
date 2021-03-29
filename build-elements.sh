#!/bin/bash
yarn build:elements

rm -rf non-angular-app/public/js/*
rm -rf non-angular-app/public/css/*
cp dist/elements/*.js non-angular-app/public/js
cp dist/elements/*.css non-angular-app/public/css
