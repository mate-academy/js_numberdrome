'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(num) {
    this.list.push(num);
  }

  removeNumber(num) {
    this.list = this.list.filter(number => number !== num);
  }

  sum() {
    return this.list.reduce((accum, current) => accum + current, 0);
  }

  product() {
    return this.list.reduce(
      (accum, current) => accum * current, 1);
  }

  min() {
    return this.list.length > 0 ? Math.min(...this.list) : Error;
  }

  max() {
    return this.list.length > 0 ? Math.max(...this.list) : Error;
  }
}

module.exports = {
  Numberdrome,
};
