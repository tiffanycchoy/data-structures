var Queue = require('../src/functional/queue.js');
var expect = require('chai').expect;

describe('queue', function() {
	var myQueue;

	beforeEach( () => {
		myQueue = Queue();
	});

	it('reports a size of zero for a new queue', function() {
		expect(myQueue.size()).to.equal(0);
	});

	it('reports a size of 3 after adding 3 items', function() {
		myQueue.enqueue(5);
		myQueue.enqueue(3);
		myQueue.enqueue(2);
		expect(myQueue.size(3));
	})

	it('reports the second item enqueued to the queue', function() {
		myQueue.enqueue(5);
		myQueue.enqueue(3);
		myQueue.enqueue(2);
		myQueue.dequeue();
		expect(myQueue.dequeue()).to.equal(3);
	})

	it('does not error when removing from an empty queue', function() {
		expect(function() { myQueue.dequeue(); }).not.throws();
	});

	it('allows sequentially queue and dequeue', function() {
		myQueue.enqueue('a');
		myQueue.enqueue('b');
		expect(myQueue.size()).to.equal(2);
		expect(myQueue.dequeue()).to.equal('a');
		myQueue.enqueue('c');
		expect(myQueue.size()).to.equal(2);
	})
});
