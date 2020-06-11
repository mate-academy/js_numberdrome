'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    this.numbers = this.numbers.filter(num => num !== n);
  }

  sum() {
    return this.numbers.reduce((accumulator, num) => accumulator + num);
  }

  product() {
    return this.numbers.reduce((accumulator, num) => accumulator * num);
  }

  min() {
    return this.numbers.length !== 0
      ? Math.min(...this.numbers)
      : new Error('The list is empty');
  }

  max() {
    return this.numbers.length !== 0
      ? Math.max(...this.numbers)
      : new Error('The list is empty');
  }
}

module.exports = {
  Numberdrome,
};
