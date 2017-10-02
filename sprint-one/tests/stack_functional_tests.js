var Stack = require('../src/functional/stack.js');
var expect = require('chai').expect;

describe('Stack', function() {
	var myStack;

	beforeEach(() => {
		myStack = Stack();
	})

	it('report a size of 0 for an empty stack', function() {
		expect(myStack.size()).to.equal(0);
	});

	it('report a size of 3 when three items are added to the stack', function() {
		myStack.push('a');
		myStack.push('b');
		myStack.push('c');
		expect(myStack.size()).to.equal(3);
	});

	it('decrements the size of the stack when an item is popped', function() {
		myStack.push('a');
		myStack.push('b');
		myStack.push('c');
		myStack.pop();
		expect(myStack.size()).to.equal(2);
	})

	it('report the popped value at the top of the stack', function() {
		myStack.push('a');
		myStack.push('b');
		myStack.push('c');
		expect(myStack.size()).to.equal(3);
		expect(myStack.pop()).to.equal('c');
		expect(myStack.size()).to.equal(2);
	})

	it('does not report error when removing items from an empty stack', function() {
		expect(function() {myStack.pop(); }).to.not.throw();
	})

})
