var assert = chai.assert;
var testInput = document.createElement('INPUT');
testInput.id = 'testId';
testInput.value = 'this is not a test';
document.body.appendChild(testInput);

describe('Calculator', function(){
  describe('Basics', function(){

    it('Get the value of an element', function(){
      assert.isFunction(getElementValue);
      assert.equal(getElementValue('testId'),'this is not a test');
    });

    it('Set the value of an element', function(){
      assert.isFunction(setElementValue);
      assert.equal()
    });

    it('Convert a string to a number', function(){
      assert.isFunction(convertStringToNumber);

    });

    it('Calculate', function(){
      assert.isFunction(calculate);

    });

  });

  describe('Extra Credit', function(){

    it('Parse a string and execute the calculation', function(){
      assert.isFunction(evaluateExpression);
      assert.equal(evaluateExpression('1+2'),3);
    })
  });
});