const Deferred=require('./deferredImpl');
// res.setEncoding('utf8');
// res.on('data',function (chunk) {
//     console.log('BODY:'+chunk);
// });
// res.on('end',function () {
//     //done
// });
// res.on('error',function () {
//     //Error
// });
// res.then(function () {
//     //Done
// },function (err) {
//     //Error
// },function (chunk) {
//     // eslint-disable-next-line no-console
//     console.log('BODY:'+chunk);
// });
let promisefy=function (res) {
    var deferred=new Deferred();
    var result='';
    res.on('data',function (chunk) {
        result+=chunk;
        deferred.progress(chunk);
    });
    res.on('end',function () {
        deferred.resolve(result);
    });
    res.on('error',function (err) {
        deferred.reject(err);
    });
    return deferred.promise;
};
promisefy(res).then(function () {
    //Done
},function (err) {
    //Error
},function (chunk) {
    //progress
    console.log('BODY:'+chunk);
});