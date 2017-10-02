var Queue = require('../src/pseudoclassical/queue.js');
var expect = require('chai').expect;

describe ('Queue', function() {
  var myQueue;

  beforeEach ( () => {
    myQueue = new Queue();
  })

  it ('reports a size of 0 for an empty queue', function() {
    expect(myQueue.size()).to.equal(0);
  })

  it ('reports a size of 3 after adding 3 items', function() {
    myQueue.enqueue('a');
    myQueue.enqueue('b');
    myQueue.enqueue('c');
    expect(myQueue.size()).to.equal(3);
  })

  it ('reports the second item enqueued to the queue', function() {
    myQueue.enqueue('a');
		myQueue.enqueue('b');
		myQueue.enqueue('c');
		myQueue.dequeue();
		expect(myQueue.dequeue()).to.equal('b');
  })

  it ('allows sequentially enqueue and dequeue', function() {
    myQueue.enqueue('a');
    myQueue.enqueue('b');
    expect(myQueue.dequeue()).to.equal('a');
    expect(myQueue.size()).to.equal(1);
    myQueue.enqueue('c');
    expect(myQueue.size()).to.equal(2);
    myQueue.enqueue('d');
    expect(myQueue.size()).to.equal(3);
    expect(myQueue.dequeue()).to.equal('b');
    expect(myQueue.size()).to.equal(2);
    expect(myQueue.dequeue()).to.equal('c');
    expect(myQueue.size()).to.equal(1);
    expect(myQueue.dequeue()).to.equal('d');
    expect(myQueue.size()).to.equal(0);
  })

})
