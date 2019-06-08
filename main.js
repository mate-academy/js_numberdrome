'use strict';

class Numberdrome {
  constructor() {
    this.num = [];
  }

  addNumber(n) {
    if (typeof n === 'number') {
      this.num.push(n);
    }
  }
  removeNumber(n) {
    let index = this.num.indexOf(n);
    if (index === -1) {
      return;
    }
    this.num.splice(index, 1);
  }
  sum() {
    return this.num.reduce(((a, b) => a + b), 0);
  }
  product() {
    return this.num.reduce(((a, b) => a * b), 1);
  }
  min() {
    if (this.num.length) {
      return Math.min(...this.num);
    }
    throw new Error('There are no numbers');
  }
  max() {
    if (this.num.length) {
      return Math.max(...this.num);
    }
    throw new Error('There are no numbers');
  }
}
