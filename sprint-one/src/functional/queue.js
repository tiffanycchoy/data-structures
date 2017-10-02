var Queue = function() {
	var someInstance = {};
	var storage = {};
	var firstIndex = 0;
	var lastIndex = 0;

	someInstance.enqueue = function(value) {
		storage[lastIndex] = value;
		lastIndex++
	};

	someInstance.dequeue = function() {
    var dequeueValue;
		if (lastIndex !== firstIndex) {
			dequeueValue = storage[firstIndex]
			delete storage[firstIndex];
			firstIndex += 1;
			return dequeueValue;
		}
	};

	someInstance.size = function() {
		return lastIndex - firstIndex;
	};

	return someInstance;
};

module.exports = Queue;
