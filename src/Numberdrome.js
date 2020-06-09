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
    return this.numbers
      .reduce((previous, current) => previous + current, 0);
  }

  product() {
    return this.numbers
      .reduce((previous, current) => previous * current, 1);
  }

  min() {
    return this.numbers.length
      ? Math.min(...this.numbers)
      : Error;
  }

  max() {
    return this.numbers.length
      ? Math.max(...this.numbers)
      : Error;
  }
}

module.exports = {
  Numberdrome,
};
