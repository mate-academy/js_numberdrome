'use strict';

class Numberdrome {
  constructor() {
  	this.numbers = [];
  }

  addNumber(n) {
  	if (typeof n === 'number') {
  	  this.numbers.push(n);
    }
  }

  removeNumber(n) {
  	if (this.numbers.indexOf(n) === -1) { return
  	};
  	this.numbers.splice(this.numbers.indexOf(n), 1);
  }

  sum() {
    return this.numbers.reduce(((a, b) => a + b), 0);
  }

  product() {
    return this.numbers.reduce(((a, b) => a * b), 1);
  }

  min() {
    return Math.min(...this.numbers)
  }

  max() {
    return Math.max(...this.numbers)
  }
}

const numberdrome = new Numberdrome();
numberdrome.addNumber(2);
numberdrome.addNumber(0.5);
numberdrome.addNumber(1);
numberdrome.addNumber(3);
numberdrome.removeNumber(5);
console.log(numberdrome.min());
console.log(numberdrome);
numberdrome.removeNumber(0.5);
console.log(numberdrome);
console.log(numberdrome.min());

