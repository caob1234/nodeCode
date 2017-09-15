const gutil = require('gulp-util');
const construct = require('./testConstruct');

let a = Object.getPrototypeOf(Object.prototype);

gutil.log(a);

gutil.log(Object.getPrototypeOf(construct.animal.prototype));