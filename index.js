// console.log(process)
// setInterval(()=>{
// console.log("Hello World")
// },50)

// const names = require( './names');
// const display = require('./display')
// display(names.Hassan)

const _ = require('lodash');
const items = [1,[2,[3,[4,[5]]]]];
const newItems = _.flattenDeep(items);
console.log('items :>> ', items);
console.log('newItems :>> ', newItems);
