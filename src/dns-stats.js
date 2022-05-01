const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  let domainsArr = [];
  let revSepDomains = domains.map((x, i) => {
    return x.split(".").reverse();
  });

  revSepDomains.forEach((x, i) => {
    let tmpStr = "";
    x.forEach((e, j) => {
      tmpStr += "." + revSepDomains[i][j];
      domainsArr.push(tmpStr);
    });
  });

  for (const el of domainsArr) {
    dns[el] = (dns[el] || 0) + 1;
  }

  return dns;
}

module.exports = {
  getDNSStats
};
