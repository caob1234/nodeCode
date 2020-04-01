'use strict';
const profiles=new Map();
profiles.set('twitter','@safds');
profiles.set('facebook','addssjsds');
profiles.set('googleplus','ada');
profiles.size;
profiles.has('twitter');
profiles.get('facebook');
profiles.has('youtube');
profiles.delete('facebook');
profiles.has('facebook');
profiles.get('facebook');
for (const entry of profiles){
    console.log(entry);
}
const tests=new Map();
tests.set(()=>2+2,4);
tests.set(()=>2*2,4);
tests.set(()=>2/2,1);
for (const entry of tests){
    console.log(entry);
    console.log((entry[0]()===entry[1])?'Pass':'Fall');
}
console.log(()=>2/2);
function f() {
    return 'hello world';
}
console.log(f);
console.log(f());