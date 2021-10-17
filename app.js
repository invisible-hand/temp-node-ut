// npm --version

// local dependency
// npm i <packagename>

//global
// npm install -g <packageName>
// or sudo npm install -g <packageName>

// package.json - manifest file that stores important info about our prpoejct
// manual approach
// npm init - step by step
// npm init -y - default

const _ = require('lodash');

const items = [1, [2, [3, [4, [5]]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);