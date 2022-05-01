const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailArr = [...email];
  let emailIndx = emailArr.lastIndexOf('@');
  let domain = emailArr.splice(emailIndx + 1).join('');
  return domain;
}

module.exports = {
  getEmailDomain
};
