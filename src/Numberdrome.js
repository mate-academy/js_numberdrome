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
    return this.list.length
      ? this.list.reduce((accum, current) => accum + current, 0)
      : 0;
  }

  product() {
    return this.list.length
      ? this.list.reduce((accum, current) => accum * current)
      : 1
      ;
  }

  min() {
    return this.list.length
      ? Math.min(...this.list)
      : new Error('There are no numbers');
  }

  max() {
    return this.list.length
      ? Math.max(...this.list)
      : new Error('There are no numbers');
  }
}

module.exports = {
  Numberdrome,
};
