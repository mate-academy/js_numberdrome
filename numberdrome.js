'use strict';

class Numberdrome {
  constructor() {
    this.numbersArr = [];
  }

  addNumber(n) {
    this.numbersArr.push(n);
  }

  removeNumber(n) {
    this.numbersArr.splice(this.numbersArr.indexOf(n), 1);
  }

  sum() {
    return this.numbersArr.reduce((a, b) => a + b, 0);
  }

  product() {
    return this.numbersArr.reduce((a, b) => a * b, 1);
  }

  min() {
    if (this.numbersArr.length <= 0) {
      throw new Error("No numbers in array");
    }
    return Math.min(...this.numbersArr);
  }

  max() {
    if (this.numbersArr.length <= 0) {
      throw new Error("No numbers in array");
    }
    return Math.min(...this.numbersArr);
  }
}

const newArr = new Numberdrome();
newArr.addNumber(2);
newArr.addNumber(3);
newArr.addNumber(12);
newArr.addNumber(13);

console.log(newArr.sum());
console.log(newArr.product());
console.log(newArr.min());
console.log(newArr.max());

const emptyArray = new Numberdrome();
console.log(emptyArray.min());
console.log(emptyArray.max());
console.log(emptyArray.sum());
console.log(emptyArray.product());
