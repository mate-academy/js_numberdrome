'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
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
    if (this.numbers.length === 0) {
      return 1;
    }

    return this.numbers.reduce((a, b) => a * b, 1);
  }

  min() {
    return Math.min(...this.numbers);
  }

  max() {
    return Math.max(...this.numbers);
  }
}

module.exports = {
  Numberdrome,
};
