var Queue = function() {
  var queueInstance = {};
  var storage = {};
  var firstIndex = 0;
  var lastIndex = 0;

  queueInstance.enqueue = function(value) {
    storage[lastIndex] = value;
    lastIndex++;
  };

  queueInstance.dequeue = function() {
    var dequeueValue;
    if (lastIndex !== firstIndex) {
      dequeueValue = storage[firstIndex];
      delete storage[firstIndex];
      firstIndex++;
      return dequeueValue;
    }
  };

  queueInstance.size = function() {
    return lastIndex - firstIndex;
  };

  return queueInstance;
}
