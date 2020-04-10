function* helloWorldGeneratorFunction() {
  let hello = yield 'hello';
  console.log(hello);
  let world = yield 'world';
  console.log(world);
  return '!';
}

let hw=helloWorldGeneratorFunction();
console.log(hw.next().value+" "+hw.next().value+hw.next().value);