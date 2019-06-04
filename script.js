'use strict';

class Numberdrome {
  constructor(numbersArray) {
    this.numbers = ...numbersArray || [];
  }
  addNumber(num) {
    this.numbers.push(num);
    console.log(this.numbers);
  }
  removeNumber(num) {
    this.numbers = this.numbers.filter(number => number !== num);
    console.log(this.numbers);
  }
  sum() {
    const sumOfNumbers = this.numbers.reduce((acc, num) => {
      acc += num;
      return acc;
    }, 0);
    return console.log(sumOfNumbers);;
  }
  product() {
    const result = this.numbers.length === 0 ?
          1 : 
          this.numbers.reduce((acc, num) => {
            acc *= num;
            return acc;
          }, 1);
    console.log(result);
  }
  min() {
    this._validate();
    const result = Math.min(...this.numbers);
    console.log(result);
  }
  max() {
    this._validate();
    const result = Math.max(...this.numbers);
    console.log(result);
  }
  _validate(){
    if (this.numbers.length === 0) throw new Error("empty array!");
}
