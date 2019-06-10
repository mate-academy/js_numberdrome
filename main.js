"use strict";

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    const index = this.numbers.indexOf(n);
    if (index >= 0) {
      this.numbers.splice(index, 1);
      return;
    }
    console.log(`Have not element width index ${n}`);
  }

  sum() {
    if (this.numbers.length && !this.numbers.some(num => isNaN(num))) {
      return this.numbers.reduce((acc, cur) => acc + cur);
    }
    return 0;
  }

  product() {
    if (this.numbers.length && !this.numbers.some(num => isNaN(num))) {
      return this.numbers.reduce((acc, cur) => acc * cur);
    }
    return 1;
  }

  min() {
    try {
        const min = Math.min.apply(null, this.numbers);
        if (!min) {
          throw new SyntaxError('there are no numbers');
        }
      return min;
    } catch(err) {
      console.log(err);
    }
  }

  max() {
    try {
      const max = Math.max.apply(null, this.numbers);
      if (!max) {
        throw new SyntaxError('there are no numbers');
      }
      return max;
    } catch(err) {
      console.log(err);
    }
  }
} 

const newNum = new Numberdrome();

newNum.addNumber(1);
newNum.addNumber(2);
newNum.addNumber(3);
newNum.addNumber(4);
newNum.addNumber("g");
newNum.sum();
newNum.product();
newNum.min();
newNum.max();
