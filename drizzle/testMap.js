const D = require('drizzlejs');
const gutil = require('gulp-util');


let array = [{a:1},{b:2}];
let array1 = [];

gutil.log(D.isArray(array));
gutil.log(array1);
gutil.log(D.assign(array1,array));
gutil.log(array1);
let obj1 = {c:3};
gutil.log(D.assign(array1,obj1));
gutil.log(array1);

