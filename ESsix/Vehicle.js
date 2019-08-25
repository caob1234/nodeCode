const gutil = require('gulp-util');
var Vehicle = function () {
    var a = 500;
    this.price = 1000;
    return {price: a};
};

let v = new Vehicle();
gutil.log(new Vehicle()); //如果构造函数内部没有return，则返回this对象。
// 只有return后面跟一个和this无关的新对象时，new之后的实例才会返回该新对象。
// new命令本身就可以执行构造函数，所以以下写法是正确的
let x = new Vehicle;

gutil.log(v.price);
gutil.log(x.price);

function Fubar(foo,bar) {
    if( !(this instanceof Fubar)){ // 当不使用new命令实例化构造函数的时候，此时实例是普通函数，this指向全局。
        return new Fubar(foo,bar);
    }
    this._foo = foo;
    this._bar = bar;
}
//构造函数必须与new命令一起使用。
gutil.log(Fubar(1,2)._bar);
gutil.log(new Fubar(1,2)._bar);