const moment = require("moment");
const fs = require("fs");
var today = moment();

// var mmt = moment('현재 시각은', 'HH:mm:ss');
console.log(today);

const file = fs.readFile('data.txt');
console.log(file);