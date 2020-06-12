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
    return this.numbers.sort((a, b) => a - b)[0];
  }

  max() {
    return this.numbers.sort((a, b) => b - a)[0];
  }
}

module.exports = {
  Numberdrome,
};
