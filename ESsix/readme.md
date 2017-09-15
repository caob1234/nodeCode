1.prototype


 由于 JavaScript 的所有对象都有构造函数（只有null除外），
 而所有构造函数都有prototype属性（其实是所有函数都有prototype属性），所以所有对象都有自己的原型对象。
  

2.prototype chain

对象的属性和方法，有可能是定义在自身，
也有可能是定义在它的原型对象。由于原型本身也是对象，又有自己的原型，所以形成了一条原型链（prototype chain）。


3.require,exports和module.exports

require引入node_modules里面的js时，直接写require('package.json中的name')；而引入非node_modules下的js时，
需要严格按照相对路径写require('./aaa')，而不能写成require('aaa');