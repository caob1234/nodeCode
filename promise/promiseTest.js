// const Promise = require('appoint');
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('haha')
  }, 1000)
  setTimeout(()=>{
    reject('This is a error')
  },2000)
});
let a = promise.then(function onSuccess(str) {
  console.log(str);
}).catch(function onError(err) {
  console.log(err);
});
// console.log(require('util').inspect(promise, { depth: 10 }));
// console.log(promise.queue[0].promise === a);
// console.log(promise.queue[1].promise === b);
