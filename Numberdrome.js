'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    this.numbers.splice(this.numbers.indexOf(n), 1);
  }

  sum() {
    return this.numbers.reduce((sum, current) => {
      return sum + current;
      }, 0);
  }

  product() {
    return this.numbers.reduce((prod, current) => {
      return prod * current;
      }, 1);
  }

  min() {
    if (!this.numbers.length) {
      throw new Error('list is empty!');
    }
        return Math.min(...this.numbers);
  }

  max() {
    if (!this.numbers.length) {
      throw new Error('list is empty!');
    }
      return Math.max(...this.numbers);
  }
}
