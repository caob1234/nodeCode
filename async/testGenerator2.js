function* foo(x) {
    let y=2*(yield (x+1));
    let z=yield (y/3);
    return (x+y+z);
}
let a=foo(5);
a.next()
a.next()
a.next()
let b=foo(5);
b.next(12)
b.next(13)