// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.storage[node] === undefined) {
    this.storage[node] = {};
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found;
  this.storage[node] ? found = true : found = false;
  return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate through the edges of node, and remove edge from the connecting node.
  for (var keys in this.storage[node]) {
    delete this.storage[keys][node];
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode][toNode] && this.storage[toNode][fromNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode][toNode] = 1;
    this.storage[toNode][fromNode] = 1;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var keys in this.storage) {
    cb(keys);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
