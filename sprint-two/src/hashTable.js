var hashTableHelpers = require('./hashTableHelpers.js');
var getIndexBelowMaxForKey = hashTableHelpers.getIndexBelowMaxForKey;
var LimitedArray = hashTableHelpers.LimitedArray;

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  //iterate through bucket.  overwrite an existing key/value pair if the key exists
  for (var i = 0; i < bucket.length; i++) {
    var touple = bucket[i];
    if (touple[0] === k) {
      touple[1] = v;
      return;
    }
  }

  //otherwise push the new key/value pair into the bucket.
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;

  //check the size of the hashtable for re-sizing.
  if (this._size >= 0.75 * this._limit) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var touple = bucket[i];
    if (touple[0] === k) {
      return touple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var touple = bucket[i]
    if (touple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
      //check the size of the hashtable for re-sizing.
      if (this._size < 0.25 * this._limit) {
        this.resize(Math.floor(this._limit / 2));
      }
      return touple[1];
    }
  }
  return undefined;
};


HashTable.prototype.resize = function(newLimit) {
  debugger
  var context = this;
  var oldStorage = this._storage;

  // the minimum limit is 8
  newLimit = Math.max(newLimit, 8);

  if (newLimit === this._limit) {
    return;
  }

  this._limit = newLimit;
  this._size = 0;
  this._storage = LimitedArray(this._limit);

  oldStorage.each(function(bucket, index) {
    if (!bucket) {
      return undefined;
    }
    for (var i = 0; i < bucket.length; i++) {
      context.insert(bucket[i][0], bucket[i][1]);
    }
  });

}

module.exports = HashTable;


/*
 * Complexity: What is the time complexity of the above functions?
 */
