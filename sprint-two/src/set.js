var Set = function() {
  this.storage = {};
};


Set.prototype.add = function(item) {
  this.storage[item] = item;
};

Set.prototype.contains = function(item) {
  var found;
  this.storage[item] ? found = true : found = false;
  return found;
};

Set.prototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = Set;
