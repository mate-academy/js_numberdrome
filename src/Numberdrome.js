'use strict';

class Numberdrome {
  constructor() {
    this.arrayOfNumbers = [];
  }

  addNumber(num) {
    this.arrayOfNumbers.push(num);
  }

  removeNumber(num) {
    this.arrayOfNumbers = this.arrayOfNumbers.filter(a => a !== num);
  }

  sum() {
    return this.arrayOfNumbers.reduce((a, b) => {
      return a + b;
    });
  }

  product() {
    return this.arrayOfNumbers.length === 0
      ? 1
      : this.arrayOfNumbers.reduce((a, b) => {
        return a * b;
      });
  }

  min() {
    return Math.min(...this.arrayOfNumbers);
  }

  max() {
    return Math.max(...this.arrayOfNumbers);
  }
}

module.exports = {
  Numberdrome,
};
