"use strict"
let async=(callback)=> {
   process.nextTick(()=>{
       let results=something;
       if (error){
           return callback(error);
       }
       callback(null,results);
   });
};
// 必须执行调用者传入的回调函数；正确传递回异常供调用者判读。