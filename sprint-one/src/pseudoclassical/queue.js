var Queue = function() {
  this.storage = {};
  this.firstIndex = 0;
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
}

Queue.prototype.dequeue = function() {
  if(this.lastIndex !== this.firstIndex) {
    var dequeuedValue = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    return dequeuedValue;
  }
}

Queue.prototype.size = function() {
  return this.lastIndex - this.firstIndex;
}

module.exports = Queue;
