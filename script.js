'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
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
    const result = this.numbers.length === 0 ? 1 : this.numbers.join('');
    console.log(result);
  }
  min() {
    if (this.numbers.length === 0) throw new Error("empty array!");
    const result = Math.min(...this.numbers);
    console.log(result);
  }
  max() {
    if (this.numbers.length === 0) throw new Error("empty array!");
    const result = Math.max(...this.numbers);
    console.log(result);
  }

}
