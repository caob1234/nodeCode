const Promise = require('appoint');
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('haha')
  }, 1000)
});
let a = promise.then(function onSuccess(str) {
  console.log(str);
});
let b = promise.catch(function onError() {});
console.log(require('util').inspect(promise, { depth: 10 }));
console.log(promise.queue[0].promise === a);
console.log(promise.queue[1].promise === b);
