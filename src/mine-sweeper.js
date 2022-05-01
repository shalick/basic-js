const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let gameBoard = matrix.map((x, i) => {
    return x.map((el, j) => {
      el = 0;
      if (i - 1 > -1 && j - 1 > -1) {
        if (matrix[i - 1][j - 1]) {
          el++;
        }
      }
      if (i - 1 > -1 && j < matrix.length - 1) {
        if (matrix[i - 1][j + 1]) {
          el++;
        }
      }
      if (i < matrix.length - 1 && j - 1 > -1) {
        if (matrix[i + 1][j - 1]) {
          el++;
        }
      }
      if (i < matrix.length - 1 && j < matrix.length - 1) {
        if (matrix[i + 1][j + 1]) {
          el++;
        }
      }
      if (i - 1 > -1) {
        if (matrix[i - 1][j]) {
          el++;
        }
      }
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j]) {
          el++;
        }
      }
      if (j - 1 > -1) {
        if (matrix[i][j - 1]) {
          el++;
        }
      }

      if (j < matrix.length - 1) {
        if (matrix[i][j + 1]) {
          el++;
        }
      }

      return el;
    });
  });
  return gameBoard;
}

module.exports = {
  minesweeper
};
