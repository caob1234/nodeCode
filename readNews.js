const events=require('events');

var emitter=new events.EventEmitter();

//订阅

emitter.on('event1',function(message){
	
	setTimeout(function(){
		console.log(message);
	console.log("I am message3!");
},2);
});

emitter.on('event2',function(message){
	console.log("I am message4");
	console.log(message);
});
//侦听器可以有多个，但是超过10个会收到一条警告
emitter.on('event1',function(message){
	console.log("I am message5");
	console.log(message);
});
//为健壮性考虑，事件发布订阅代码都应该添加error事件捕获异常代码
emitter.on('error',function(e){
	console.log("problem with EventEmitter:"+e.message);
});
//发布
emitter.emit('event1',"I am message1!");
emitter.emit('event2',"I am message2!");


