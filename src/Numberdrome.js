'use strict';

class Numberdrome {
  constructor() {
    this.args = [];
  }

  addNumber(n) {
    this.args.push(n);
  }

  removeNumber(n) {
    this.args = this.args.filter(element => element !== n);
  }

  sum() {
    return this.args.reduce((a, b) => a + b) || 0;
  }

  product() {
    if (this.args.length === 0) {
      return 1;
    }

    return this.args.reduce((a, b) => a * b);
  }

  min() {
    if (this.args.length === 0) {
      return Error;
    }

    return Math.min(...this.args);
  }

  max() {
    if (this.args.length === 0) {
      return Error;
    }

    return Math.max(...this.args);
  }
}

module.exports = {
  Numberdrome,
};
