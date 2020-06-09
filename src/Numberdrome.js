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
    return (this.numbers.length
      ? Math.min(...this.numbers)
      : Error);
  };

  max() {
    return (this.numbers.length
      ? Math.max(...this.numbers)
      : Error);
  };
}

module.exports = {
  Numberdrome,
};
