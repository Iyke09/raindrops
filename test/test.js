const assert = require('chai').assert;
const myApp = require ('../src/app.js');

describe('SquareFunc', () => {
  describe('handle valid input', () => {
    it('should return 811181 when the input is 9119', () => {
      assert.equal(myApp.squareFunc(9119), 811181);
    });
    it('should return 916 when the input is 34', () => {
      assert.equal(myApp.squareFunc(34), 916);
    });
    it('should return 125 when the input is 15', () => {
      assert.equal(myApp.squareFunc(15), 125);
    });
  });
});



