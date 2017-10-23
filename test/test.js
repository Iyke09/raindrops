const assert = require('chai').assert;
const myApp = require ('../src/app.js');

describe('Raindrop-Speak', () => {
  describe('handle valid input', () => {
    it('should return Plong when the input is 28', () => {
      assert.equal(myApp.rainDrop(28),'Plong');
    });
    it('should return PlingPlang when the input is 1755', () => {
      assert.equal(myApp.rainDrop(1755),'PlingPlang');
    });
    it('should return 34 when the input is 34', () => {
      assert.equal(myApp.rainDrop(34),34);
    });
    it('should return PlingPlang when the input is 15', () => {
      assert.equal(myApp.rainDrop(15),'PlingPlang');
    });
    it('should return 1 when the input is 1', () => {
      assert.equal(myApp.rainDrop(1),1);
    });
  });
});

describe('Raindrop-Speak', () => {
  describe('handle invalid input', () => {
    it('should return please enter value for empty values', () => {
      assert.equal(myApp.rainDrop(),'please enter a value');
    });
    it('should return invalid input when the input is of type string', () => {
      assert.equal(myApp.rainDrop('hello'),"please enter a number");
    });
    it('should return invalid input when the input is of type is less than 0', () => {
      assert.equal(myApp.rainDrop(-890),"please enter a value > 0");
    });
  });
});

