var DoublyLinkedList = require('../src/doublyLinkedList.js');
var expect = require('chai').expect;

describe('Doubly Linked List', function() {
  var doublyLinkedList;

  beforeEach( () => {
    doublyLinkedList = new DoublyLinkedList();
  });

  it ('should be able to add a node to the tail', function() {
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.tail.value).to.equal(3);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it ('should be able to remove the head node', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(7);
    expect(doublyLinkedList.head.value).to.equal(3);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it ('should determine if a value is in the doubly linked list', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(7)).to.equal(false);
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(9);
    expect(doublyLinkedList.contains(7)).to.equal(true);
    expect(doublyLinkedList.contains(9)).to.equal(true);
  });

  it ('should be able to add a node to the head of the doubly linked list', function() {
    doublyLinkedList.addToHead(1);
    expect(doublyLinkedList.head.value).to.equal(1);
    doublyLinkedList.addToHead(2);
    expect(doublyLinkedList.head.value).to.equal(2);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.value).to.equal(3);
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it ('should be able to remove a node from the tail', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(3);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(1)).to.equal(false);
    expect(doublyLinkedList.tail.value).to.equal(2);
    doublyLinkedList.addToTail(0);
    expect(doublyLinkedList.tail.value).to.equal(0);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(0)).to.equal(false);
    expect(doublyLinkedList.tail.value).to.equal(2);
  });


})
