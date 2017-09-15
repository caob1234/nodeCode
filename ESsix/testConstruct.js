const gutil = require('gulp-util');

function cat(color,name) {
    this.color = color;
    this.name = name;
    this.meow = function () {
        gutil.log('mew,mew,mew');
    };
}
let cat1 = new cat('黑色','小乖');
let cat2 = new cat('黑色','大毛');

gutil.log(cat1.meow === cat2.meow); // 同一个对象的不同实例占用了不同的资源,但是不同实例的同一个方法是同一个行为，应该被共享。


function animal(name) {
    this.name = name;
}

animal.prototype.meow = function () {
    gutil.log('mew,mew');
};

let fish = new animal('大毛');
let dog = new animal('小白');

gutil.log(fish.meow === dog.meow);

fish.meow = function () {
    gutil.log('I am in water');
};
fish.meow(); // I am in water  //如果实例对象本身就有meow()那么它就不会再去原型对象寻找这个方法。
dog.meow();  // mew,mew

exports.animal = animal;

