const D = require('drizzlejs');


let array = [{a:1},{b:2}];
let array1 = [];

console.log(D.isArray(array));
console.log(array1);
console.log(D.assign(array1,array));
console.log(array1);
let obj1 = {c:3};
console.log(D.assign(array1,obj1));
console.log(array1);

