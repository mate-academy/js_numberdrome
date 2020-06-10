'use strict';

class Numberdrome {
  constructor(...args) {
    this.args = args;
  }

  addNumber(n) {
    this.args.push(n);
  }

  removeNumber(n) {
    this.args = this.args.filter(element => element !== n);
  }

  sum() {
    return this.args.reduce((a, b) => a + b);
  }

  product() {
    if (this.args.length === 0) {
      return 1;
    }

    return this.args.reduce((a, b) => a * b);
  }

  min() {
    return Math.min(...this.args);
  }

  max() {
    return Math.max(...this.args);
  }
}

module.exports = {
  Numberdrome,
};
