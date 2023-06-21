//WORKED WITH samaa88#3822

const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word SAMANEH is present Horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'M', 'A', 'N', 'E', 'H', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SAMANEH');

    assert.isTrue(result);
  });

  it("should return true if the word ANASTASIA is present Vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'S', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'T', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'A', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'I', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'A', 'Q', 'U', 'A', 'L'],
    ], 'ANASTASIA');

    assert.isTrue(result);
  });


  it("should return 'The array is empty!' if the 2d array is empty", function() {
    const result = wordSearch([], 'Anastasia');
    assert.strictEqual(result, 'The array is empty!');
  });
});

