var LinkedList = require('../src/linkedList.js');
var expect = require('chai').expect;

describe ('Linked List', function() {
  var myLinkedList;
  beforeEach( () => {
    myLinkedList = new LinkedList();
  });

  it ('should add a node to the head', function() {
    myLinkedList.addToHead('a');
    myLinkedList.addToHead('b');
    myLinkedList.addToHead('c');
    expect(myLinkedList.contains('a')).to.equal(true);
    expect(myLinkedList.head.value).to.equal('c');
    expect(myLinkedList.tail.value).to.equal('a');
  })

  it ('should add a node to the tail', function() {
    myLinkedList.addToTail('a');
    myLinkedList.addToTail('b');
    myLinkedList.addToTail('c');
    expect(myLinkedList.head.value).to.equal('a');
    expect(myLinkedList.tail.value).to.equal('c');
    expect(myLinkedList.contains('c')).to.equal(true);
  })

  it ('should not contain a value that was removed', function() {
    myLinkedList.addToHead('a');
    myLinkedList.addToHead('b');
    myLinkedList.addToHead('c');
    myLinkedList.addToHead('d');
    myLinkedList.removeHead();
    expect(myLinkedList.contains('d')).to.equal(false);
    myLinkedList.removeTail();
    expect(myLinkedList.contains('a')).to.equal(false);

  });
})
