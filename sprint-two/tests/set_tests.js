var Set = require('../src/set.js');
var expect = require('chai').expect;

describe('set', function() {
  var set;

  beforeEach(function() {
    set = new Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add string values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add numeric values to a set', function() {
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(true);
    expect(set.contains(3)).to.equal(true);
    expect(set.contains(4)).to.equal(false);
  });

  it('should add objects to a set', function() {
    set.add({name: 'Tiffany' });
    set.add({occupation: 'Software Engineer' });
    expect(set.contains({name: 'Tiffany' })).to.equal(true);
    expect(set.contains({occupation: 'Software Engineer' })).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

});
