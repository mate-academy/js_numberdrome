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
    let result = 0;
    this.numbers.forEach(num => result += num);
    return result;
  }

  product() {
    let result = 1;
    this.numbers.forEach(num => result *= num);
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
