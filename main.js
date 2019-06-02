"use strict";

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    if (typeof n === "number") {
      this.list.push(n);
    } else {
      throw new Error("This isn't number");
    }
  }

  removeNumber(n) {
    if (typeof n === "number") {
      const index = this.list.findIndex((number, i) => {
        if (number === n) {
          return i;
        }
      });

      this.list.splice(index, 1);
    } else {
      throw new Error("This isn't number");
    }
  }

  sum() {
    return this.list.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  product() {
    return this.list.reduce((a, b) => {
      return a * b;
    }, 1);
  }

  min() {
    if (this.list.length === 0) {
      throw new Error("The list is empty");
    } else {
      return this.list.reduce((a, b) => {
        return Math.min(a, b);
      });
    }
  }

  max() {
    if (this.list.length === 0) {
      throw new Error("The list is empty");
    } else {
      return this.list.reduce((a, b) => {
        return Math.max(a, b);
      });
    }
  }
}

const numb = new Numberdrome();

numb.addNumber(1);
numb.addNumber(2);
numb.addNumber(5);
numb.addNumber(100);
numb.addNumber(12);
numb.addNumber(-11);
numb.addNumber(5);
