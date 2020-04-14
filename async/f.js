//正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。
// 如果不是 Promise 对象，就直接返回对应的值。
async function f() {
    //等同于return 123;
    return await 123;
}
f().then(v=>console.log(v));
async function f1() {
    return await new Promise(resolve =>setTimeout(()=>resolve('hello await'),200) )
}
f1().then(value => console.log(value));