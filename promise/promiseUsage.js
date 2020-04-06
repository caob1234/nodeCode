// function msgAfterTimeout (msg, who, timeout, onDone) {
//     setTimeout(function () {
//         onDone(msg + " Hello " + who + "!");
//     }, timeout);
// }
// msgAfterTimeout("", "Foo", 100, function (msg1) {
//     console.log(msg1);
//     msgAfterTimeout(msg1, "Bar", 200, function (msg2) {
//         console.log("done after 300ms:" + msg2);
//     });
// });
function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})
//link：http://es6-features.org/#PromiseUsage