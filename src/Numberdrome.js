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
    return Math.min(...this.numbers);
  }

  max() {
    return Math.max(...this.numbers);
  }
}

module.exports = {
  Numberdrome,
};
