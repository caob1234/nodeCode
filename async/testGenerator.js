'use strict'
const gutil = require('gulp-util'),
    path = require('path'),
    fs = require('fs');
const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};
//test 1
// let gen=function* () {
//     let r1=yield readFile(path.dirname(require.main.filename)+'/readme.md');
//     let r2=yield readFile(path.dirname(require.main.filename)+'/exerciseAsync.js');
// }
// gen().next().value.then(data=>{gutil.log(data.toString())});
// gen().next().value.then(data=>gutil.log(data.toString()));
//test 2
function* gen1() {
    yield readFile(path.dirname(require.main.filename) + '/readme.md');
    yield readFile(path.dirname(require.main.filename) + '/exerciseAsync.js');
    // gutil.log(f1.toString());
    // gutil.log(f2.toString());
};
let gen = gen1();
gen.next().value.then(data => gutil.log(data.toString()));
gen.next().value.then(data => gutil.log(data.toString()));
//test 3
// let gen=async function(){
//     let r1=await readFile(path.dirname(require.main.filename)+'/readme.md');
//     let r2=await readFile(path.dirname(require.main.filename)+'/exerciseAsync.js');
//     gutil.log(r1.toString())
//     gutil.log(r2.toString())
// }
// gen();
