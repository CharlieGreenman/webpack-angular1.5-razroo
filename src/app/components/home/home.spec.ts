// import { addToValue10 } from './HomeController';
// var expect = require('chai').expect;

// import { expect } from 'chai';
import { assert } from 'chai';

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

function returnString(test){
  return `test {test}`;
}

describe('add()', function() {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
