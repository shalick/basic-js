const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArr = [...str];
  let encodedStr = "";
  let count = 1;
  strArr.forEach((x, i) => {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (str[i] !== str[i + 1]) {
        encodedStr += count !== 1 ? count + str[i] : str[i];
        count = 1;
      }
    }
  });
  return encodedStr;
}

module.exports = {
  encodeLine,
};
