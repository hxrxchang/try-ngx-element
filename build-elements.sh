#!/bin/bash
yarn build:elements

rm -rf non-angular-app/public/*
cp dist/elements/*.js non-angular-app/public/
cp dist/elements/*.css non-angular-app/public/
