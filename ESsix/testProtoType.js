const gutil = require('gulp-util');
const c = require('./testConstruct');

let a = Object.getPrototypeOf(Object.prototype);

gutil.log(a);

gutil.log(Object.getPrototypeOf(c.animal.prototype));

let tiger = new c.animal('cat');

tiger.meow();

gutil.log(Object.getPrototypeOf(tiger.meow.prototype));

let myArray = function () {};
myArray.prototype = new Array();
myArray.prototype.construct = myArray;
let mine = new myArray();
mine.push(1,2,3);
gutil.log(mine.length);
gutil.log(mine instanceof Array);


