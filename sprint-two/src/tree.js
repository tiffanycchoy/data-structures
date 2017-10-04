var Tree = function(value) {
  this.value = value;
  this.parent = null;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  var myTree = new Tree(value);
  myTree.parent = this;
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

Tree.prototype.removeFromParent = function() {
  var parentTree = this.parent;

  //remove child from parent's children.
  for (var i = 0; i < parentTree.children.length; i++) {
    if (parentTree.children[i].value === this.value) {
      parentTree.children.splice(i, 1);
    }
  }

  this.parent = null;
}

Tree.prototype.traverse = function(cb) {
  cb(this.value);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
}

module.exports = Tree;

/*
 * Complexity: What is the time complexity of the above functions?
 */
