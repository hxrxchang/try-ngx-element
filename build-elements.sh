#!/bin/bash
yarn build:elements

cp dist/elements/*.js non-angular-page/scripts/
cp dist/elements/*.css non-angular-page/styles/
