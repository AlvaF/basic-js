const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let answ = [];
  if (typeof (arr) === 'object' || arr !== null) {
    arr.forEach(element => {
      if (typeof (element) === 'string') {
        answ.push(element.trim().slice(0, 1))
      }
    });
  }
  if (answ.length === 0) return false
  else return answ.sort((a, b) => a.localeCompare(b)).join('').toUpperCase()
}

module.exports = {
  createDreamTeam
};
