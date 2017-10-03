var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var exists = false;
  // if the index does not contain touples, create an array w/ touples
  if (!this._storage.get(index)) {
    this._storage.set(index, [[k,v]]);
  } else {
    //iterate through array to overwrite an existing matching key
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i] = [k,v];
        exists = true;
      }
    }
    //if key does not exist, add it to the array
    if (!exists) {
      this._storage.get(index).push([k,v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removeValue;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      removeValue = this._storage.get(index)[i];
      this._storage.get(index).splice(i,1);
    }
  }
  return removeValue;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
