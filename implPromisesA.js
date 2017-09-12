"use strict"
const events=require("events");


let emitter = new events.EventEmitter();

let Promise = function(){
	emitter.call(this);
};
const util = require("util");
util.inherits(Promise,emitter);

Promise.prototype.then = function(fulfilledHandler,errorHandler,progressHandler){
	if (typeof fulfilledHandler === 'function') {
		this.once('success',fulfilledHandler);
	}
	if (typeof errorHandler === 'function') {
		this.once('error',errorHandler);
	}
	if (typeof progressHandler ==='function') {
		this.once('progress',progressHandler);
	}
	return this;
}

let Deferred = function(){
	this.state = 'unfulfilled';
	this.Promise = new Promise();
};

Deferred.prototype.resolve = function(obj){
	this.state = 'fulfilled';
	this.promise.emit('success',obj);
}
