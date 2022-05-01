const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    if (arr instanceof Array === false)
      throw new Error("'arr' parameter must be an instance of the Array!");
  } catch (e) {
    throw e;
  }
  let transformedArr = [];
  let controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case controls[0]:
        if (i != arr.length - 1) {
          i++;
        }
        break;
      case controls[1]:
        if (i != 0 && arr[i - 2] != controls[0]) {
          transformedArr.pop();
        }
        break;
      case controls[2]:
        if (i != arr.length - 1) {
          transformedArr.push(arr[i + 1]);
        }
        break;
      case controls[3]:
        if (i != 0 && arr[i - 2] != controls[0]) {
          transformedArr.push(arr[i - 1]);
        }
        break;
      default:
        transformedArr.push(arr[i]);
    }
  }
  return transformedArr;
}

module.exports = {
  transform
};
