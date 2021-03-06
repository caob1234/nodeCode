const http=require('http');
const options={
	host:'www.baidu.com',
	port:'80',
	path:'upload',
	method:'post'
};
// var req = http.request(options,function(res){
// 	console.log("status:  "+res.statusCode);
// 	console.log("headers:  "+JSON.stringify(res.headers));
// 	res.setEncoding('utf8');
// 	res.on('data',function(chunk){
// 		console.log('body:'+chunk);
// 	});
// 	res.on('end',function(){
// 		console.log('this is end event!');
// 	});
//
// });
// req.on('error',function(e){
// 	console.log('problem with request:'+e.message);
//
// });
// req.write('data\n');
// req.write('data\n');
// req.end(()=>{console.log('req already end')});
let reqPromise=(options)=>{
	let promise=new Promise((resolve,reject)=>{
		let req=http.request(options,(res)=>{
			console.log("status:  "+res.statusCode);
			console.log("headers:  "+JSON.stringify(res.headers));
			res.setEncoding('utf8');
			res.on('data',function(chunk){
				// console.log('body:'+chunk);
				resolve(chunk);
			});
			res.on('error',err =>reject(err) );
			res.on('end',function(){
				console.log('this is end event!');
			});
		});
		req.on('error',function(e){
			console.log('problem with request:'+e.message);

		});
		req.write('data\n');
		req.write('data\n');
		req.end(()=>{console.log('req already end')});
	});
	return promise;
};
reqPromise(options).then((chunk)=>{
	console.log('body:'+chunk);
}).catch(err=>console.log('error:'+err));