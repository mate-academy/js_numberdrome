'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    this.numbers = this.numbers.filter(item => item !== n);
  }

  sum() {
    return this.numbers
      .reduce((accumulator, current) => accumulator + current, 0);
  }

  product() {
    return this.numbers
      .reduce((accumulator, current) => accumulator * current, 1);
  }

  min() {
    return this.numbers.length
      ? Math.min(...this.numbers)
      : 'error';
  }

  max() {
    return this.numbers.length
      ? Math.max(...this.numbers)
      : 'error';
  }
}

module.exports = {
  Numberdrome,
};
