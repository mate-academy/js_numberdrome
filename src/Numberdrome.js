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
    return this.numbers.reduce((number, acumulator) => acumulator + number, 0);
  }

  product() {
    return this.numbers.reduce((number, acumulator) => acumulator * number, 1);
  }

  min() {
    return Math.min(...this.numbers);
  }

  max() {
    return this.numbers.length ? Math.max(...this.numbers) : Error;
  }
}

module.exports = {
  Numberdrome,
};
