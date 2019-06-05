'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    if (typeof n === 'number'){
      this.numbers.push(n);
    }
  }

  removeNumber(n) {
    return this.numbers.filter(num => num !== n)
  }

  sum() {
    return this.numbers.reduce(((a, b) => a + b), 0)
  }

  product() {
    return this.numbers.reduce(((a, b) => a * b), 1)
  }

  min() {
    if (this.numbers.length === 0) {
      throw 'Error: The Numberdrome is empty'
    }
    return Math.min(...this.numbers)
  }

  max() {
    if (this.numbers.length === 0) {
      throw 'Error: The Numberdrome is empty'
    }
    return Math.max(...this.numbers)
  }

}

const numbersList = new Numberdrome();
numbersList.addNumber(56);
numbersList.addNumber(102);
numbersList.addNumber(3);
numbersList.addNumber(507);
numbersList.addNumber(81);
numbersList.addNumber(102);

console.log(numbersList.removeNumber(102));

console.log(numbersList.sum());
console.log(numbersList.product());
console.log(numbersList.min());
console.log(numbersList.max());
