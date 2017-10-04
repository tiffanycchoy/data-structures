var Tree = require('../src/tree.js');
var expect = require('chai').expect;

describe('Tree', function() {
  var myTree;

  beforeEach( () => {
    myTree = new Tree(5);
  });

  it ('should add children to the tree', function() {
    myTree.addChild(4);
    myTree.addChild(3);
    myTree.addChild(2);
    expect(myTree.children.length).to.equal(3);
  });

  it ('should be able to add grandchildren to a child tree', function() {
    myTree.addChild(4);
    myTree.addChild(3);
    myTree.addChild(2);
    myTree.children[0].addChild(1);
    myTree.children[0].addChild(7);
    expect(myTree.children.length).to.equal(3);
    expect(myTree.children[0].children.length).to.equal(2);
    expect(myTree.contains(1)).to.equal(true);
  });

  it ('should be able to check if the tree contains a specific value', function() {
    myTree.addChild(4);
    myTree.addChild(3);
    myTree.addChild(2);
    myTree.children[0].addChild(1);
    myTree.children[0].addChild(7);
    expect(myTree.contains(7)).to.equal(true);
    expect(myTree.contains(8)).to.equal(false);
  });

  it ('should be able to determine its parent', function() {
    myTree.addChild(4);
    myTree.addChild(3);
    myTree.addChild(2);
    myTree.children[0].addChild(1);
    myTree.children[0].addChild(7);
    expect(myTree.parent).to.equal(null);
    expect(myTree.children[0].parent.value).to.equal(5);
    expect(myTree.children[0].children[0].parent.value).to.equal(4);
  });

  it ('should be able to remove a tree from its parent', function() {
    myTree.addChild(4);
    myTree.addChild(3);
    myTree.addChild(2);
    myTree.children[0].addChild(1);
    myTree.children[0].addChild(7);
    myTree.children[0].removeFromParent();
    expect(myTree.contains(4)).to.equal(false);
    expect(myTree.contains(1)).to.equal(false);
    expect(myTree.children.length).to.equal(2);
    expect(myTree.children[0].value).to.equal(3);
  })

})
