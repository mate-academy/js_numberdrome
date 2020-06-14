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
    return this.numbers.reduce((sum, number) => sum + number, 0);
  }

  product() {
    return this.numbers.reduce((product, number) => product * number, 1);
  }

  min() {
    return this.numbers.length
      ? Math.min(...this.numbers)
      : 'error';
  }

  max() {
    return this.numbers.length
      ? Math.max(...this.numbers)
      : 'error';
  }
}

module.exports = {
  Numberdrome,
};
