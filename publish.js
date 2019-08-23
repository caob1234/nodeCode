var events=require('events');

var emitter=new events.EventEmitter();

emitter.emit('event1','I am message!');