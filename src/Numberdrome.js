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
      .reduce((accumulator, number) => accumulator + number);
  }

  product() {
    return this.numbers.length === 0
      ? 1
      : this.numbers.reduce((accumulator, number) => accumulator * number);
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
