async是Generator的语法糖。
Generator函数有多种理解角度。语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。
形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；
二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
总结一下，调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。
以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。
value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。

参考资料：https://es6.ruanyifeng.com/#docs/generator

总结：
相关知识点提到的例子：
![相关知识点提到的例子](nodejs_async.png)
nodejs事项异步的三个元素：事件循坏，观察者模式，请求对象。
在linux上epoll实现事件循坏，在MacOs上由kqueue实现，windows上由IOCP实现。最终由libuv统一向上层提供接口。
执行每个循坏体的过程称为Tick。每个Tick的过程就是查看是否有事件待处理。