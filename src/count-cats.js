const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsNum = 0;
  for (const el of matrix) {
    for (const i of el) {
      if (i === "^^") {
        catsNum++;
      }
    }
  }
  return catsNum;
}

module.exports = {
  countCats
};
