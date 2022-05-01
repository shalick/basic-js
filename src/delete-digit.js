const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return n
    .toString()
    .split('')
    .reduce((prev, v, i) => {
      let nx = n.toString().split('');
      nx.splice(i, 1);
      nx = parseInt(nx.join(''));
      if (nx > prev) {
        prev = nx;
      }
      return prev;
    }, 0);
}

module.exports = {
  deleteDigit
};
