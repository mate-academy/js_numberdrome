'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  };

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    this.numbers = this.numbers.filter(number => number !== n);
  }

  sum() {
    return this.numbers.reduce((prev, cur) => prev + cur, 0);
  }

  product() {
    return this.numbers.reduce((prev, cur) => prev * cur, 1);
  }

  min() {
    return this.numbers.length === 0
      ? new Error('List empty')
      : Math.min(...this.numbers);
  }

  max() {
    return this.numbers.length === 0
      ? new Error('List empty')
      : Math.max(...this.numbers);
  }
}

module.exports = {
  Numberdrome,
};
