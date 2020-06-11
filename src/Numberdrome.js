'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n);
  }

  removeNumber(n) {
    this.list = this.list.filter(digit => digit !== n);
  }

  sum() {
    return this.list.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }

  product() {
    return this.list.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    }, 1);
  }

  min() {
    return this.list.length !== 0
      ? Math.min.apply(null, this.list)
      : new Error('List of numbers is empty');
  }

  max() {
    return this.list.length !== 0
      ? Math.max.apply(null, this.list)
      : new Error('List of numbers is empty');
  }
}

module.exports = {
  Numberdrome,
};
