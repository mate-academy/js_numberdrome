'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let n = new Numberdrome();
  n.addNumber(10);
  n.addNumber(12);
  console.log(n.sum());
  console.log(n.product());
  console.log(n.min());
  console.log(n.max());
});

class Numberdrome {
  constructor() {
    this.num = [];
  }

  addNumber(n) {
    this.num.push(n);
  }

  removeNumber(n) {
    this.num.splice(this.num.indexOf(n), 1);
  }

  sum() {
    return this.num.reduce(((x, y) => x + y), 0)
  }

  product() {
    return this.num.reduce(((x, y) => x * y), 1);
  }

  min() {
    try {
      if (!this.num.length) {
        throw 'error!'
      }
      return Math.min(...this.num);
    } catch (e) {
      console.log(e);
    }
  }

  max() {
    if (!this.numbers.length) {
      throw new Error('list is empty!');
    }
    return Math.max(...this.numbers);
  }
}
