var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToHead = function(value) {
  var myNode = new Node(value);
  if (this.head === null) {
    this.tail = myNode;
  } else {
    myNode.next = this.head;
  }
  this.head = myNode;
}

LinkedList.prototype.addToTail = function(value) {
  var myNode = new Node(value);
  if(this.head === null && this.tail === null) {
    this.head = myNode;
  } else {
    this.tail.next = myNode;
  }
  this.tail = myNode;
}

LinkedList.prototype.removeHead = function() {
  var temp = this.head;
  this.head = this.head.next;
  temp.next = null;
  return temp.value;
}

LinkedList.prototype.removeTail = function() {
  var current = this.head;
  while (current.next !== this.tail) {
    current = current.next;
  }
  var removedNode = current;
  current.next = null;
  this.tail = current;
  return removedNode.value;
}

LinkedList.prototype.contains = function(value) {
  var current = this.head;
  while (current !== this.tail.next) {
    if (current.value === value) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
}

module.exports = LinkedList;

/*
 * Complexity: What is the time complexity of the above functions?
 */
