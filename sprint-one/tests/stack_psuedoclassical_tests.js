var Stack = require('../src/pseudoclassical/stack');
var expect = require('chai').expect;

describe('Stack', function() {
  var myStack;
  beforeEach ( () => {
    myStack = new Stack();
  });

  it ('reports a size of 0 for an empty stack', function() {
    expect(myStack.size()).to.equal(0);
  });

  it ('reports a size of 3 when threei tems are added to the stack', function() {
    myStack.push('a');
    myStack.push('b');
    myStack.push('c');
    expect(myStack.size()).to.equal(3);
  });

  it ('decrements the size of the stack when an item is popped', function() {
    myStack.push('a');
    myStack.push('b');
    myStack.push('c');
    myStack.pop();
    expect(myStack.size()).to.equal(2);
  });

  it ('does not report an error when removing an item from an empty stack', function() {
    expect(function() {myStack.pop(); }).to.not.throw();
  });

})
