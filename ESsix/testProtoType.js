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
myArray.prototype.construct = myArray;
let mine = new myArray();
mine.push(1,2,3);
gutil.log(mine.length);
gutil.log(mine instanceof Array);

var getDefiningObject =(obj, propKey) => {  //箭头函数不可以当作构造函数，因此不可以使用new来实例化
    while (obj && !{}.hasOwnProperty.call(obj, propKey)) {
        obj = Object.getPrototypeOf(obj);
    }
    return obj;
}

gutil.log(getDefiningObject(tiger,'meow'));
gutil.log(getDefiningObject(myArray,'construct'));


