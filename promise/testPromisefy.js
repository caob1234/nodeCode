promisefy(res).then(function () {
    //Done
},function (err) {
    //Error
},function (chunk) {
    //progress
    console.log('BODY:'+chunk);
});