'use strict';

class Numberdrome {
  constructor() {
    this.listOfNumbers = [];
  }

  addNumber(n) {
    this.listOfNumbers.push(n);
  }

  removeNumber(n) {
    this.listOfNumbers = this.listOfNumbers.filter(digit => digit !== n);
  }

  sum() {
    return this.listOfNumbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }

  product() {
    return this.listOfNumbers.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    }, 1);
  }

  min() {
    return Math.min.apply(null, this.listOfNumbers);
  }

  max() {
    return Math.max.apply(null, this.listOfNumbers);
  }
}

module.exports = {
  Numberdrome,
};
