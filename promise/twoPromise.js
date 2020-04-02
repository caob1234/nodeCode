"use strict"
const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error('fail'));
        console.log("This is reject of p1")
    }, 6000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(p1);
        console.log("This is resolve of p2")
    }, 2000)
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))