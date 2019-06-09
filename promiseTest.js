var Promise = require('appoint');
var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('haha')
  }, 1000)
});
var a = promise.then(function onSuccess() {});
var b = promise.catch(function onError() {});
console.log(require('util').inspect(promise, { depth: 10 }));
console.log(promise.queue[0].promise === a);
console.log(promise.queue[1].promise === b);
