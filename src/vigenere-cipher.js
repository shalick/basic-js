const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  config(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }

    this.str = str.toUpperCase();
    this.key = key.toUpperCase();

    if (str.length > key.length) {
      this.key = this.key.repeat(Math.ceil(str.length / key.length));
    }
  }
  encrypt(str, keyword) {
    this.config(str, keyword);
    let res = "";
    console.log(this.str)

    for (let i = 0, j = 0; i < this.str.length; i++) {
      const char = this.str.charCodeAt(i) - 65;
      const shift = this.key.charCodeAt(i - j) - 65;
      if (char < 0 || char > 26) {
        res += this.str[i];
        j++;
        console.log(j);
      } else {
        res += String.fromCharCode(((char + shift) % 26) + 65);
      }
    }

    console.log(res);
    return this.isDirect ? res : res.split("").reverse().join("");
  }
  decrypt(str, keyword) {
    this.config(str, keyword);

    let res = "";

    for (let i = 0, j = 0; i < this.str.length; i++) {
      const char = this.str.charCodeAt(i) - 65;
      const shift = this.key.charCodeAt(i - j) - 65;

      if (char < 0 || char > 26) {
        res += this.str[i];
        j++;
      } else {
        res += String.fromCharCode(((char - shift + 26) % 26) + 65);
      }
    }
    console.log(res)
    return this.isDirect ? res : res.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
