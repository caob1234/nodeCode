import {EventEmitter} from "mocha/lib/browser/events";

var Promise=function () {
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
}
