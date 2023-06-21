//WORKED WITH samaa88#3822

/**
 * a function  receives a 2D array of letters and a word. 
 * The function must:
 * Check to find the word horizontally and vertically
 * Return true if the word is found, and return false if the word is not found
 * 
 * Start by editing the code in wordsearch.js to allow the tests to pass.
 */


// letters is an array of arrays
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// horizontalJoin is a newly created array after using .map
// ls are elements(smaller arrays inside the original) of this new array
// .join is to link all letters togather into one string ->
// [
//   'AWCFQUAL', 'SEINFELD',
//   'YFCFQUAL', 'HMJTEVRG',
//   'WHCSYERL', 'BFRENEYB',
//   'UBTWAPAI', 'ODCAKUAS',
//   'EZKFQUAL'
// ]
// loop goes over each string in the array and checks if it is a word

//transfer a transpose function to check for vertical 

const transpose = require("./transpose");

const wordSearch = (letters, word) => { 

    if (letters.length !== 0) {

      const horizontalJoin = letters.map(ls => ls.join(''));
      const verticalJoin = transpose(letters).map(ls => ls.join(''));

      //The concat method is used to concatenate these two arrays into a single array (array1 + concat + array 2)

      for (l of horizontalJoin.concat(verticalJoin)) { 
           if (l.includes(word)){
              return true;
           } 
      }
      return false; 

    } else {
      return ('The array is empty!');
    }
}

module.exports = wordSearch;

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

console.log(result);
