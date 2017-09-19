const gutil = require('gulp-util');

var Person = function (name,age) {
    this.name = name;
    this.age = age;
    return {name:'monkey'};
};

function _new(_constructor,param1) {
    let args = [].slice.call(arguments);
    let constructor = args.shift();
    // 创建一个空对象，继承构造函数的prototype属性
    let context = Object.create(constructor.prototype);
    let result = constructor.apply(context,args);
    return ( typeof result === 'object' && result != null) ? result:context;

}

var actor = _new(Person,'张三',28);
gutil.log(actor);