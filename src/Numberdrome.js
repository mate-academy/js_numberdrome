'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(number) {
    this.list.push(number);
  }

  removeNumber(number) {
    this.list = this.list.filter(item => item !== number);
  }

  sum() {
    return this.list.reduce((acc, cur) => acc + cur, 0);
  }

  product() {
    return this.list.reduce((acc, cur) => acc * cur, 1);
  }

  min() {
    return Math.min(...this.list);
  }

  max() {
    return Math.max(...this.list);
  }
}

module.exports = {
  Numberdrome,
};
