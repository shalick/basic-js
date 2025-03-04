const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let elSumArr = [];
  let result = 0;
  matrix = [...matrix];
  matrix.forEach((x, i) => {
    x.forEach((e, j) => {
      if (matrix[i][j] === 0 && matrix[i + 1]) {
        matrix[i + 1][j] = 0;
      } else {
        elSumArr.push(e);
      }
    });
  });
  result = elSumArr.reduce((a, b) => a + b);
  return result;
}

module.exports = {
  getMatrixElementsSum
};
