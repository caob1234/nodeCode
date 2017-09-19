const gutil = require('gulp-util');
var Vehicle = function () {
    this.price = 1000;
};

let v = new Vehicle();
// new命令本身就可以执行构造函数，所以以下写法是正确的
let x = new Vehicle;

gutil.log(v.price);
gutil.log(x.price);
