const gutil = require('gulp-util');

let obj ={};
let p = {};

obj.__proto__ = p; //_proto_属性和prototype一样是对象的属性

gutil.log(Object.getPrototypeOf(obj) === p);

//获取实例对象obj的原型对象的三种方法
gutil.log(obj.__proto__);
gutil.log(obj.constructor.prototype);
gutil.log(Object.getPrototypeOf(obj));  //建议用该方式获取原型对象。

let o = new Object();

gutil.log(Object.getPrototypeOf(o) === Object.prototype)
