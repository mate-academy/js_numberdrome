'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }
  addNumber(n) {
    this.numbers.push(n);
  }
  sum() {
    return this.numbers.reduce((accumulator, number) => accumulator + number);
  }
  product() {
    return this.numbers.reduce((accumulator, number) => accumulator * number);
  }
  min() {
    return this.numbers.length === 0
      ? new Error('List empty')
      : Math.min(...this.numbers);
  }
  max() {
    return this.numbers.length === 0
      ? new Error('List empty')
      : Math.max(...this.numbers);
  }
  removeNumber(n) {
    this.numbers = this.numbers.filter(number => number !== n);
  }
}

module.exports = {
  Numberdrome,
};
