var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(value) {
  this.value = value;
  this.previous = null;
  this.next = null;
}

DoublyLinkedList.prototype.addToTail = function(value) {
  var myNode = new Node(value);
  if (this.head === null && this.tail === null) {
    this.head = myNode;
    this.tail = myNode;
  } else {
    myNode.previous = this.tail;
    this.tail.next = myNode;
    this.tail = myNode;
  }
}

DoublyLinkedList.prototype.removeHead = function() {
  if (!this.head && !this.tail) {
    return null;
  } else {
    var temp = this.head.next;
    temp.prev = null;
    this.head.next = null;
    this.head = temp;
  }
}

DoublyLinkedList.prototype.contains = function(value) {
  var current = this.head;
  while(current !== this.tail.next) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}

DoublyLinkedList.prototype.addToHead = function(value) {
  var myNode = new Node(value);
  if (this.head === null && this.tail === null) {
    this.head = myNode;
    this.tail = myNode;
  } else {
    myNode.next = this.head;
    this.head.previous = myNode;
    this.head = myNode;
  }
}

DoublyLinkedList.prototype.removeTail = function() {
  if (this.head !== null && this.tail !== null) {
    var previousNode = this.tail.previous;
    previousNode.next = null;
    this.tail.previous = null;
    this.tail = previousNode;
  }
}

module.exports = DoublyLinkedList;
