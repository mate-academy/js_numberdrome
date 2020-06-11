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
    return this.listOfNumbers.length !== 0
      ? Math.min.apply(null, this.listOfNumbers)
      : new Error('List of numbers is empty');
  }

  max() {
    return this.listOfNumbers.length !== 0
      ? Math.max.apply(null, this.listOfNumbers)
      : new Error('List of numbers is empty');
  }
}

module.exports = {
  Numberdrome,
};
