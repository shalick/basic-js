const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sArr = [...arr];
  let minusOnesIndx = [];
  sArr = sArr
    .filter((x, i) => {
      if (x === -1) {
        minusOnesIndx.push(i);
      } else {
        return x;
      }
    })
    .sort((a, b) => a - b);
  for (const el of minusOnesIndx) {
    sArr.splice(el, 0, -1);
  }
  return sArr;
}

module.exports = {
  sortByHeight,
};
