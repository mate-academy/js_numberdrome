'use strict';

class Numberdrome {
  constructor(numbersArray) {
    this.numbers = numbersArray ? numbersArray : [];
  }

  addNumber(num) {
    this.numbers.push(num);
    return this.numbers;
  }

  removeNumber(num) {
    this.numbers = this.numbers.filter(number => number !== num);
    return this.numbers;
  }

  sum() {
    const sumOfNumbers = this.numbers.reduce((acc, num) => {
      acc += num;
      return acc;
    }, 0);
    return sumOfNumbers;
  }

  product() {
    const result = this.numbers.reduce((acc, num) => {
      acc *= num;
      return acc;
    }, 1);
    return result;
  }

  min() {
    this._validate();
    const result = Math.min(...this.numbers);
    return result;
  }

  max() {
    this._validate();
    const result = Math.max(...this.numbers);
    return result;
  }

  _validate() {
    if (this.numbers.length === 0) {
      throw new Error("empty array!");
    }
  }
}
