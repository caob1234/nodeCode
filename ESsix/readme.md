1.prototype


 由于 JavaScript 的所有对象都有构造函数（只有null除外），
 而所有构造函数都有prototype属性（其实是所有函数都有prototype属性），所以所有对象都有自己的原型对象。
  

2.prototype chain

对象的属性和方法，有可能是定义在自身，
也有可能是定义在它的原型对象。由于原型本身也是对象，又有自己的原型，所以形成了一条原型链（prototype chain）。


3.require,exports和module.exports

require引入node_modules里面的js（自定义模块）时，直接写require('package.json中的name')；而引入非node_modules下的js时（文件模块），
需要严格按照相对路径写require('./aaa')，而不能写成require('aaa');文件模块的require标识符引入必须以.或..或绝对路径开头。

核心模块：node自带文件，引入最快；文件模块：require标识符特殊，引入次快（文件扩展名可以不带，不带的话按.js,.json,.node顺序引入）；
自定义模块：非核心文件模块，引入要按node_modules父子关系引入，最慢。

exports后面放的是函数名称，不是函数；可以：exports.animal = animal，不可以：exports.animal = animal()。exports是形参引入

module.exports可以达到引入类的效果。

4.es6中的箭头函数

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。


（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。


（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。


（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

5.Object.prototype._proto_,可以改写某个对象的原型对象。