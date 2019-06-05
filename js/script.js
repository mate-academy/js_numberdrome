'use strict';

class Numberdrome {
  constructor() {
    this.numberList = [];
  }

  addNumber(n) {
    if (typeof String(n)) {
      this.numberList.push(n)
    }
  }

  removeNumber(n) {
    this.numberList.splice(this.numbers.indexOf(n), 1);
  }

  sum() {
    return this.numberList.reduce((acc, num) => acc += num, 0);
  }

  product() {
    return this.numberList.reduce((acc, num) => acc *= num, 1);
  }

  min() {
    try {
      if (this.numberList.length) {
        return Math.min(...this.numberList);
      }
      throw new Error('there are no numbers');
    } catch (error) {
      return error;
      }
  }
  max() {
    try {
      if (this.numberList.length) {
        return Math.max(...this.numberList);
      }
      throw new Error('there are no numbers');
    } catch (error) {
      return error;
      }
  }
}

let test = new Numberdrome();
test.addNumber(7);
test.addNumber(13);
test.addNumber(17);
test.addNumber(24);
test.addNumber(32);
test.addNumber(54);
console.log('sum =', test.sum());
console.log('product =', test.product());
console.log('min number =', test.min());
console.log('max number =', test.max());
