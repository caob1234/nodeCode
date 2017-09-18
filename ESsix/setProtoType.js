const gutil = require('gulp-util');

let a = {x:1};

let b = Object.setPrototypeOf({},a); // 这样b对象可以拿到a对象的所有属性和方法。

//等同于
// let b = {__proto__:a};

gutil.log(b.x);

let c = function () {
    this.foo = 'bar';
};

let d = new c();

gutil.log(d.foo);
// new命令通过构造函数新建实例对象，实质是将实例对象的原型，指向构造函数的prototype属性，然后在实例对象上执行构造函数。
let e = Object.setPrototypeOf({},c.prototype);
c.call(e);
gutil.log(e.foo);