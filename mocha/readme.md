**mocha学习记录**

1.一般全局安装mocha框架，然后用 mocha add.test.js 测试.

2.mocha --reporter 生成测试报告总是报错，这条命令的正确格式是什么呢？(就是因为没有把测试文件放在test文件夹下面)

mocha -R markdown > spec.md 在test文件夹的父目录下生成markdown格式，名称为spec.md的文件。

3.这条命令测试es6文件../node_modules/mocha/bin/mocha --compilers js:babel-core/register

mocha的测试文件，需要放到test文件夹下面，命令才能生效。

4. mocha --recursive 不只执行test文件夹下的文件----不管在那一层都会执行。

5. ../node_modules/.bin/mocha -R mochawesome 生成酷炫的mochawesome文档（此处不能用mocha命令，因为mochawesome是安装在项目内的）。


**karma学习记录**


