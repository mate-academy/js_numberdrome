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
    return Math.max(...this.numbers);
  }

  min() {
    return Math.min(...this.numbers);
  }
}

module.exports = {
  Numberdrome,
};
