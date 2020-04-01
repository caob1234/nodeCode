/* eslint-disable no-console */
'use strict';
// function DelayedGreeter(name) {
//     this.name = name;
// }
// DelayedGreeter.prototype.greet = function () {
//     setTimeout(function cb() {
//         console.log('hello '+this.name);
//     }.bind(this));
// };
class DelayedGreeter {
    constructor(name) {
        this.name = name;
    }
    greet(){
        setTimeout(function cb() {
            console.log('hello '+this.name);
        },500);
    }
}
const greeter = new DelayedGreeter('World');
greeter.greet();
//will print "hello undefined",because scope of sb function and scope of setTimeout function are different.
//You can solve the problem by bind before ES2015.Now,you can solve it by arrow function
class DelayedGreeterr {
    constructor(name) {
        this.name=name;
    }
    greet(){
        setTimeout(()=>console.log('Hello '+this.name));
    }
}
const greeterr=new DelayedGreeterr('world');
greeterr.greet();