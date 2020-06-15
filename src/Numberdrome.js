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
    if (this.numbers.length === 0) {
      throw new Error('List empty');
    } else {
      return this.numbers.reduce((a, b) => Math.min(a, b));
    }
  }
  max() {
    if (this.numbers.length === 0) {
      throw new Error('List empty');
    } else {
      return this.numbers.reduce((a, b) => Math.max(a, b));
    }
  }
  removeNumber(n) {
    this.numbers = this.numbers.filter(number => number !== n);
  }
}

module.exports = {
  Numberdrome,
};
