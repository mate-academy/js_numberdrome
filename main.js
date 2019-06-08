'use strict';

class Numberdrome {
  constructor() {
    this.numbersArr = [];
  }

  addNumber(num) {
    if (typeof num === "number") {
      this.numbersArr.push(num)
    }
  }

  removeNumber(num) {
    const index = this.numbersArr.indexOf(num);
    this.numbersArr.splice(index, 1);
  }

  sum() {
    return this.numbersArr.reduce(((a,b) => a + b), 0);
  }

  product() {
    return this.numbersArr.reduce(((a,b) => a * b), 1);
  }

  min() {
    if(this.numbersArr.length) {
      return Math.min(...this.numbersArr);
    }
      throw new Error('Error: There are no numbers');

  }

  max() {
    if (this.numbersArr.length) {
      return Math.max(...this.numbersArr);
    }
    throw new Error('Error: There are no numbers');

  }
}

const listOfNumbers = new Numberdrome;
listOfNumbers.addNumber(15);
listOfNumbers.addNumber(10);
listOfNumbers.addNumber(5);
listOfNumbers.addNumber(20);
listOfNumbers.addNumber(25);
listOfNumbers.addNumber(30);
console.log(listOfNumbers.numbersArr);
listOfNumbers.removeNumber(5);
console.log(listOfNumbers.numbersArr);
console.log(listOfNumbers.sum());
console.log(listOfNumbers.product());
console.log(listOfNumbers.min());
console.log(listOfNumbers.max());
