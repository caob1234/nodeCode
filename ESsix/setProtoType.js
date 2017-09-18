const gutil = require('gulp-util');

let a = {x:1};

let b = Object.setPrototypeOf({},a); // 这样b对象可以拿到a对象的所有属性和方法。

//等同于
// let b = {__proto__:a};

gutil.log(b.x);

