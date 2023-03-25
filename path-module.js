const path = require('path');
// console.log(path.sep);
const filePath = path.join('/content','subfolder','content.txt');
// console.log(filePath);
const basename = path.basename(filePath);
// console.log(basename);
const absolute = path.resolve(__dirname,'/content','subfolder','content.txt');
console.log(absolute);