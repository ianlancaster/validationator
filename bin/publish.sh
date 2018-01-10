#!/bin/bash
git add .;
git commit -m 'Publish new version to NPM';
yarn build;
yarn minify;
cp src/index.js dist/index.js;
yarn test;
find ./ -type -not -name '.git' -not -name 'package.json' -not -name 'index.js' -not -name 'validate.js' -not -name 'validateFunc.js' -delete;
# move solution to root
# remove all unneccesary files
# publish