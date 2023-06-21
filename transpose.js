
const transpose = function(matrix) {
  let newArray = [];
  for (let columns = 0; columns < matrix[0].length; columns++) {
    newArray.push([]);
  }
  for (let rows = 0; rows < matrix.length; rows++) {
    for (let columns = 0; columns < matrix[rows].length; columns++) {
      let value = matrix[rows][columns];
      newArray[columns][rows] = value; // turn around the column into a row
    }
  }
  return newArray;
};

module.exports = transpose;