**mocha学习记录**

1.一般全局安装mocha框架，然后用 mocha add.test.js 测试.

2.mocha --reporter 生成测试报告总是报错，这条命令的正确格式是什么呢？

测试文件必须放到test文件夹里面，像这样写：../node_modules/mocha/bin/mocha -R markdown

3.  ../node_modules/mocha/bin/mocha --compilers js:babel-core/register 这条命令测试es6文件。

mocha的测试文件，需要放到test文件夹下面，命令才能生效。
