const gutil = require('gulp-util');

let obj ={};
let p = {};

obj.__proto__ = p; //_proto_属性和prototype一样是对象的属性，而construct是prototype的属性。

gutil.log(Object.getPrototypeOf(obj) === p);