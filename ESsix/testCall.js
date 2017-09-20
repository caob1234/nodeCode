const gutil = require('gulp-util');

var obj = {};

var f = function () {
    return this;
};

gutil.log(f() === this); // 此处显示结果和浏览器显示结果不一致，在node环境下f()里面存的是global全局变量？而this里面存的是一个Object

gutil.log(f.call(obj) === obj);