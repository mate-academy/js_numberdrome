'use strict';

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    this.numbers = this.numbers.filter(el => el !== n);
  }

  sum() {
    return this.numbers.reduce((accumulator, number) =>
      number + accumulator,
    0
    );
  }

  product() {
    return this.numbers.reduce((accumulator, number) =>
      number * accumulator,
    1
    );
  }

  min() {
    return this.numbers.length
      ? Math.min(...this.numbers)
      : 'List is empty!';
  }

  max() {
    return this.numbers.length
      ? Math.max(...this.numbers)
      : 'List is empty!';
  }
}

module.exports = {
  Numberdrome,
};
