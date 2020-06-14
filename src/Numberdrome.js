'use strict';

class Numberdrome {
  constructor() {
    this.numbersList = [];
  }

  addNumber(n) {
    this.numbersList.push(n);
  }

  removeNumber(n) {
    this.numbersList = this.numbersList.filter(el => el !== n);
  }

  sum() {
    return this.numbersList.reduce((number, accumulator) =>
      number + accumulator,
    0
    );
  }

  product() {
    return this.numbersList.reduce((number, accumulator) =>
      number * accumulator,
    1
    );
  }

  min() {
    return Math.min(...this.numbersList);
  }

  max() {
    return Math.max(...this.numbersList);
  }
}

module.exports = {
  Numberdrome,
};
