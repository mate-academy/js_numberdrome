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
    return this.numbersArr.length > 0 ? this.numbersArr.reduce((a,b) => a + b, 0) : 0;
  }

  product() {
    return this.numbersArr.length > 0 ? this.numbersArr.reduce((a,b) => a * b, 1) : 1;
  }

  min() {
    try {
      if (this.numbersArr.length <= 0) {
        throw new Error("No numbers in array");
      } else {
        return Math.min(...this.numbersArr);
      }
    }
    catch(err) {
      return err;
    }
  }

  max() {
    try {
      if (this.numbersArr.length <= 0) {
        throw new Error("No numbers in array");
      } else {
        return Math.max(...this.numbersArr);
      }
    }
    catch(err) {
      return err;
    }
  }
}

let newArray = new Numberdrome();
newArray.addNumber(2);
newArray.addNumber(3);
newArray.addNumber(12);
newArray.addNumber(13);

console.log(newArray.sum());
console.log(newArray.product());
console.log(newArray.min());
console.log(newArray.max());

let emptyArray = new Numberdrome();
console.log(emptyArray.min());
console.log(emptyArray.max());
console.log(emptyArray.sum());
console.log(emptyArray.product());
