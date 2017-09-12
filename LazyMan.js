function _LazyMan(_name) {
    var _this = this;
    _this.tasks = [];
    _this.tasks.push(function() {
        console.log('Hi! This is ' + _name + '!');
        // ÕâÀïµÄthisÊÇwindow£¬ËùÒÔÒª»º´æthis
        _this.next();
    });
    setTimeout(function() {
        _this.next();
    }, 0);
}

// pushº¯ÊýÀïÃæµÄthisºÍsetTimeoutº¯ÊýÀïÃæµÄthis¶¼Ö¸ÏòÈ«¾Ö×÷ÓÃÓò£¬ËùÒÔÒª»º´æµ±Ç°thisÖ¸Ïò
_LazyMan.prototype.next = function() {
    var _fn = this.tasks.shift();
    _fn && _fn();
}
_LazyMan.prototype.sleep = function(_time) {
    var _this = this;
    _this.tasks.push(function() {
        setTimeout(function() {
            console.log('Wake up after ' + _time);
            _this.next();
        }, _time);
    });
    return _this;
}
_LazyMan.prototype.sleepFirst = function(_time) {
    var _this = this;
    _this.tasks.unshift(function() {
        setTimeout(function() {
            console.log('Wake up after ' + _time);
            _this.next();
        }, _time);
    });
    return _this;
}
_LazyMan.prototype.eat = function(_eat) {
    var _this = this;
    _this.tasks.push(function() {
        console.log('Eat ' + _eat);
        _this.next();
    });
    return _this;
}

// ·â×°¶ÔÏó
var LazyMan = function(_name) {
    return new _LazyMan(_name);
}

console.log(LazyMan('LazyMan').sleep('测试').eat('eat'))