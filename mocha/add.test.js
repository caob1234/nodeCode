const add = require('./add');
const expect = require('chai').expect;

describe('加法函数测试',function () {
    it('1加1应等于2',function () {
        expect(add(1,1)).to.be.equal(2);
    });
});

