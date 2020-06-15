'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  };

  addNumber(n) {
    this.numbers.push(n);
  };

  removeNumber(n) {
    this.numbers = this.numbers.filter(number => number !== n);
  };

  sum() {
    return this.numbers.reduce((number, acc) => acc + number, 0);
  };

  product() {
    return this.numbers.reduce((number, acc) => acc * number, 1);
  };

  max() {
    return this.numbers.length
      ? Math.max(...this.numbers)
      : new Error('There are not a numbers');
  }

  min() {
    return this.numbers.length
      ? Math.min(...this.numbers)
      : new Error('There are not a numbers');
  }
}

module.exports = {
  Numberdrome,
};
