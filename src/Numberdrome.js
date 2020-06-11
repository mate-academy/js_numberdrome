'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    this.numbers = this.numbers.filter(number => number !== n);
  }

  sum() {
    return this.numbers.reduce((prev, item) => prev + item, 0);
  }

  product() {
    return this.numbers.reduce((prev, item) => prev * item, 1);
  }

  min() {
    return this.numbers.length
      ? Math.min(...this.numbers)
      : new Error('There are no numbers');
  }

  max() {
    return this.numbers.length
      ? Math.max(...this.numbers)
      : new Error('There are no numbers');
  }
}

module.exports = {
  Numberdrome,
};
