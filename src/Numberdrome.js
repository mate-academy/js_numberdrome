'use strict';

class Numberdrome {
  constructor() {
    this.listOfNumber = [];
  }

  addNumber(n) {
    this.listOfNumber.push(n);
  }

  removeNumber(n) {
    while (this.listOfNumber.indexOf(n) !== -1) {
      this.listOfNumber.splice(this.listOfNumber.indexOf(n), 1);
    }
  }

  sum() {
    return this.listOfNumber.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  }

  product() {
    return this.listOfNumber.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    });
  }

  min() {
    return Math.min.apply(null, this.listOfNumber);
  }

  max() {
    return Math.max.apply(null, this.listOfNumber);
  }
}

module.exports = {
  Numberdrome,
};
