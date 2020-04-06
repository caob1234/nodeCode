const fs = require('fs');
const gutil = require('gulp-util');

// let rs = fs.createReadStream('test.md',{highWaterMark:11});
// rs.setEncoding('utf8');
// let data = '';
// rs.on('data',function (chunk) {
//     data += chunk;
// });
// rs.on('end',function () {
//     gutil.log(data);
// });
function readInfo(path) {
    return new Promise((resolve) => {
        let rs = fs.createReadStream(path, {highWaterMark: 11});
        rs.setEncoding('utf8');
        let data = '';
        rs.on('data', function (chunk) {
            data += chunk;
        });
        rs.on('end', function () {
            resolve(data);
        });
    })
};
readInfo('test.md').then((data)=>{
    gutil.log(data);
});