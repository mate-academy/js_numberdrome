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
    return this.numbers.reduce((sum, number) => sum * number, 1);
  }

  min() {
    if (this.numbers.length === 0) {
      throw new Error('array is empty');
    }

    return Math.min(...this.numbers);
  }

  max() {
    if (this.numbers.length === 0) {
      throw new Error('array is empty');
    }

    return Math.max(...this.numbers);
  }
}

module.exports = {
  Numberdrome,
};
