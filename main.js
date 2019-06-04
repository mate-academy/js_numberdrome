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
  	if (this.numbers.indexof(n) === -1) { return
  	};
  	this.numbers.splice(this.n.indexof(n), 1);
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
};

