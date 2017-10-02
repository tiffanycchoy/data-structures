var Stack = function() {
  var someInstance = {};
  var storage = {};
  var size = 0;
  someInstance.push = function(value) {
    storage[size] = value;
    size += 1;
  };

  someInstance.pop = function() {
    var poppedValue;
    if(size > 0) {
      poppedValue = storage[size - 1];
      delete storage[size - 1];
      size -= 1;
      return poppedValue;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

module.exports = Stack;
