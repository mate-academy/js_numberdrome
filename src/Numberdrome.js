'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(number) {
    this.numbers.push(number);
  }

  removeNumber(number) {
    this.numbers = this.numbers.filter(item => item !== number);
  };

  sum() {
    return this.numbers.reduce((sum, number) => sum + number);
  };

  product() {
    return this.numbers.reduce((sum, number) => sum * number, 1);
  };

  min() {
    return Math.min(...this.numbers);
  };

  max() {
    return Math.max(...this.numbers);
  };
}

module.exports = {
  Numberdrome,
};
