'use strict';

class Numberdrome {
  constructor() {
    this.arr = [];
  }

  addNumber(unit) {
    this.arr.push(unit);
  }

  removeNumber(unit) {
    this.arr = this.arr.filter((j) => {
      return j !== unit;
    });
  }

  sum() {
    return this.arr.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  product() {
    return this.arr.reduce((a, b) => {
      return a * b;
    }, 1);
  }

  min() {
    return Math.min.apply(null, this.arr);
  }

  max() {
    return Math.max.apply(null, this.arr);
  }
}

module.exports = {
  Numberdrome,
};
