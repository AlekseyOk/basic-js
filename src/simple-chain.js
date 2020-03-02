const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this;
  },

  removeLink(position) {
    if ( position - 1 < 0 || !(typeof position === 'number') || this.chain.length < position  ) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse()
    return this;
  },

  finishChain() {
    const chainStr = this.chain.join('~~');
    this.chain = [];
    return chainStr;
  }
};

module.exports = chainMaker;