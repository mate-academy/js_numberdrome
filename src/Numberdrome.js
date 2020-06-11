'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
    this.error = new Error('No numbers');
  };

  addNumber(n) {
    this.numbers.push(n);

    return this.numbers;
  }

  removeNumber(n) {
    this.numbers = this.numbers.filter(x => x !== n);

    return this.numbers;
  }

  sum() {
    return this.numbers.reduce((a, b) => a + b, 0);
  }

  product() {
    return this.numbers.reduce((a, b) => a * b, 1);
  }

  min() {
    if (this.numbers.length !== 0) {
      return Math.min(...this.numbers);
    };
    throw this.error;
  }

  max() {
    if (this.numbers.length !== 0) {
      return Math.max(...this.numbers);
    };
    throw this.error;
  }
}

module.exports = {
  Numberdrome,
};
