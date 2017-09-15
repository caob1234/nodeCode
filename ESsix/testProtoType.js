const gutil = require('gulp-util');
const c = require('./testConstruct');

let a = Object.getPrototypeOf(Object.prototype);

gutil.log(a);

gutil.log(Object.getPrototypeOf(c.animal.prototype));

let tiger = new c.animal('cat');

tiger.meow();

gutil.log(Object.getPrototypeOf(tiger.meow.prototype));

