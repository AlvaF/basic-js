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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const nStr = n.toString();
  let answ = 0;

  for (let i = 0; i < nStr.length; i++) {
    const num = parseInt(nStr.slice(0, i) + nStr.slice(i + 1));
    if (num > answ) {
      answ = num;
    }
  }

  return answ;
}

module.exports = {
  deleteDigit
};
