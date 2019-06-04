'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  };
  addNumber(number) {
    this.numbers.push(number);
  };
  removeNumber(number) {
    let index = this.numbers.indexOf(number);
    if (~index) {
      this.numbers.splice(index, 1);
    };
  };
  sum() {
    let result = 0;
    this.numbers.forEach( (item) => {
      result += item
    });
    return result;
  };
  product() {
    let result = 1;
    this.numbers.forEach((item) =>{
      result *= item;
    });
    return result;
  };
  min() {
    if (this.numbers.length === 0) {
      throw new Error('no args');
    }
    let minValue = this.numbers[0];
    this.numbers.forEach((item) =>{
      if (minValue > item) {
        minValue = item;
      }
    });
    return minValue;
  }
  max() {
    if (this.numbers.length === 0) {
      throw new Error('no args');
    }
    let maxValue = this.numbers[0];
    this.numbers.forEach((item) =>{
      if (maxValue < item) {
        maxValue = item;
      }
    });
    return maxValue;
  }
}