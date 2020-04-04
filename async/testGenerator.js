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

const gen = async function () {
    const f1 = await readFile(path.dirname(require.main.filename)+'/readme.md');
    const f2 = await readFile(path.dirname(require.main.filename)+'/Vehicle.js');
    gutil.log(f1.toString());
    gutil.log(f2.toString());
};

gen();

//Generator函数在目前的版本貌似已经不支持,作为Generator函数的语法糖，async代替了它