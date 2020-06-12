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
    return this.list.reduce(
      (accumulator, currentNumber) => accumulator + currentNumber, 0);
  }

  product() {
    return this.list.reduce((accumulator, currentNumber) => (
      accumulator * currentNumber
    ), 1);
  }

  min() {
    return this.list.length
      ? Math.min(...this.list)
      : Error;
  }

  max() {
    return this.list.length
      ? Math.max(...this.list)
      : Error;
  }
}

module.exports = {
  Numberdrome,
};
