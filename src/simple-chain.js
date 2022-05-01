const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currChain: [],
  getLength() {
    return this.currChain.length;
  },
  addLink(value) {
    this.currChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position < this.getLength() 
    ) {
      const index = position - 1;
      this.currChain.splice(index, 1);
      return this;
    }
    this._deleteChain(); 
    throw new Error(`You can't remove incorrect link!`);
    
  },
  reverseChain() {
    this.currChain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.currChain.join("~~");
    this._deleteChain();
    return chain;
  },
  _deleteChain() {
    this.currChain.length = 0;
  }
};

module.exports = {
  chainMaker
};
