function assert(a,b) {
    if(a){
        console.log(b);
    }
}

var outerValue = 'ninja';
var later;
function outerFunction(){
    var innerValue = 'samurai';
    function innerFunction() {
        assert(outerValue,'Inner can see the ninja');
        assert(innerValue,'Inner can see the samurai');
        assert(tooLate,'Inner can see the ronin');
    }
    later = innerFunction;
}
assert(!tooLate,"Outer can't see the ronin");
outerFunction();
var tooLate = 'ronin';

later('wakizashi');