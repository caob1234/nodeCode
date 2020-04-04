const EventEmitter=require('events');
const util=require('util');
let Promise=function () {
    EventEmitter.call(this);
};
util.inherits(Promise,EventEmitter);
Promise.prototype.then=function (fulfilledHander,errorHandler,progressHandler) {
    if (typeof fulfilledHander==='function'){
        this.once('success',fulfilledHander);
    }
    if (typeof errorHandler==='function'){
        this.once('error',errorHandler);
    }
    if (typeof progressHandler==='function'){
        this.once('progress',progressHandler);
    }
    return this;
}
exports.Promise=Promise;
