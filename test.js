function* helloWorldGeneratorFunction() {
  var hello = yield 'hello';
  console.log(hello);
  var world = yield 'world';
  console.log(world);
  return '!';
}

var helloWorldGenerator = helloWorldGeneratorFunction();