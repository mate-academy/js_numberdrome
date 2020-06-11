'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(number) {
    this.numbers.push(number);
  }

  removeNumber(number) {
    this.numbers = this.numbers.filter(digit => digit !== number);
  }

  sum() {
    return this.numbers
      .reduce((accumulator, number) => (accumulator + number), 0);
  }

  product() {
    return this.numbers
      .reduce((accumulator, number) => (accumulator * number), 1);
  }

  min() {
    return this.numbers.length
      ? Math.min(...this.numbers)
      : new Error('There are no numbers');
  }

  max() {
    return this.numbers.length
      ? Math.max(...this.numbers)
      : new Error('There are no numbers');
  }
}

module.exports = {
  Numberdrome,
};
