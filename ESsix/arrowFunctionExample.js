'use strict';
// const numbers=[2,7,8,1];
// const even=numbers.filter(function (x) {
//     return x%2;
// });
const numbers=[2,7,8,1];
// const even = numbers.filter(x=>x%2===0);
const even = numbers.filter(x=>{
    if (x%2===0){
        // eslint-disable-next-line no-console
        console.log(x+'is even');
        return true;
    }
});