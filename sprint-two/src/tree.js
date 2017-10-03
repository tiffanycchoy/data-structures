var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  var myTree = new Tree(value);
  this.children.push(myTree);
};

Tree.prototype.contains = function(target) {

  //base case
  if (this.value === target) {
    return true;
  }

  //recurse on children array
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
