"use strict"

class Numberdrome {
  constructor() {
    this.listOfNumbers = [];
  }

  addNumber(n) {
    this.listOfNumbers.push(n);
  }

  removeNumber(n) {
    while(this.listOfNumbers.includes(n)) {
      this.listOfNumbers.splice(this.listOfNumbers.indexOf(n), 1);
    }
  }

  sum() {
    return this.listOfNumbers.reduce((sum, current) => sum + current, 0);
  }

  product() {
    return this.listOfNumbers.reduce((sum, current) => sum * current, 1);
  }

  min() {
    try {
    if (!this.listOfNumbers.length) {
      throw new Error("The list is empty");
    }
    this.listOfNumbers.sort((a, b) => a - b)
    return this.listOfNumbers[0];
    } catch(e) {
      return e;
    }
  }

  max() {
    try {
      if (!this.listOfNumbers.length) {
        throw new Error("The list is empty");
      }
      this.listOfNumbers.sort((a, b) => a - b);
      return this.listOfNumbers[this.listOfNumbers.length - 1];
      } catch(e) {
        return e;
    }
  }
}

const list = new Numberdrome;

console.log(list.min());
