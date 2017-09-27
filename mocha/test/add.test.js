import add from '../add';
import chai from 'chai';

let expect = chai.expect;

describe('加法函数测试',function () {
    it('1加1应等于1',function () {
        expect(add(1,1)).to.be.equal(1);
    });
});

describe('add.js测试',function () {
    it('1加2应等于3',function () {
        expect(add(1,2)).to.be.equal(3);
    });
});

