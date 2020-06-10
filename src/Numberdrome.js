'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  };

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    this.numbers = this.numbers.filter(number => number !== n);
  }

  sum() {
    return this.numbers.reduce((prev, cur) => prev + cur, 0);
  }

  product() {
    return this.numbers.reduce((prev, cur) => prev * cur, 1);
  }

  min() {
    let result;

    this.numbers.length === 0
      ? result = 'List empty'
      : result = Math.min(...this.numbers);

    return result;
  }

  max() {
    let result;

    this.numbers.length === 0
      ? result = 'List empty'
      : result = Math.max(...this.numbers);

    return result;
  }
}

module.exports = {
  Numberdrome,
};
