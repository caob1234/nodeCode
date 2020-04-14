class Sleep {
    constructor(timeout) {
        this.timeout =timeout;
    }
    then(resolve,reject){
        let startTime=Date.now();
        setTimeout(
            ()=>resolve(Date.now()-startTime),
            this.timeout
        );
    }
}
(async ()=>{
    let sleepTime=await new Sleep(2000);
    console.log(sleepTime);
})();
//上面代码中，await命令后面是一个Sleep对象的实例。
// 这个实例不是 Promise 对象，但是因为定义了then方法，await会将其视为Promise处理。