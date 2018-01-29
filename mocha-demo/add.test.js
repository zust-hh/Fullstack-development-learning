var add = require('./add');
var expect = require('chai').expect;

describe('加法函数的测试', function () {
  it('1 加 1应该等于2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });
  it('3 加 -3应该等于0', function () {
    expect(add(3, -3)).to.be.equal(0);
  });
});