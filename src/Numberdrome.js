'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n);
  }

  removeNumber(n) {
    this.list = this.list.filter(number => number !== n);
  }

  sum() {
    return this.list.reduce((a, n) => a + n, 0);
  }

  product() {
    return this.list.reduce((a, n) => a * n, 1);
  }

  min() {
    if (this.list.length === 0) {
      throw Error('List empty');
    }

    return Math.min(...this.list);
  }

  max() {
    if (this.list.length === 0) {
      throw Error('List empty');
    }

    return Math.max(...this.list);
  }
}

module.exports = {
  Numberdrome,
};
