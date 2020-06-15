'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }
  addNumber(n) {
    this.numbers.push(n);
  }
  sum() {
    return this.numbers.reduce((acc, x) => acc + x);
  }
  product() {
    return this.numbers.reduce((acc, x) => acc * x);
  }
  min() {
    return this.numbers.reduce((a, b) => Math.min(a, b));
  }
  max() {
    return this.numbers.reduce((a, b) => Math.max(a, b));
  }
  removeNumber(n) {
    for (let i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] === n) {
        delete this.numbers[i];
      }
    }

    return this.numbers;
  }
}

module.exports = {
  Numberdrome,
};
