'use strict';
const x=27;
const y=17;
const obj={x,y};
module.exports={
    square(x){
        return x*x;
    },
    cube(x){
        return x*x;
    }
};
const namespace='-webkit-';
const style={
    [namespace+'box-sizing']:'border-box',
    [namespace+'box-shadow']:'10px10px5px #888888'
};
const person={
    name:'Geroge',
    surname:'Boole',
    get fullname(){
        return this.name+' '+this.surname;
    },
    set fullname(fullname){
        let parts=fullname.split(' ');
        this.name=parts[0];
        this.surname=parts[1];
    }
};
console.log(person.fullname);
console.log(person.fullname='Alan Turning');
console.log(person.name);