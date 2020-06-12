'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(number) {
    this.list.push(number);
  }

  removeNumber(number) {
    this.list = this.list.filter(num => num !== number);
  }

  sum() {
    if (!this.list.length) {
      return 0;
    } else {
      return this.list.reduce((sum, value) => sum + value);
    }
  }

  product() {
    if (!this.list.length) {
      return 1;
    } else {
      return this.list.reduce((product, value) => product * value);
    }
  }

  min() {
    if (!this.list.length) {
      return new Error('We have no digit 4 U');
    }

    return Math.min(...this.list);
  }

  max() {
    if (!this.list.length) {
      return new Error('We have no digit 4 U');
    }

    return Math.max(...this.list);
  }
}

module.exports = {
  Numberdrome,
};
