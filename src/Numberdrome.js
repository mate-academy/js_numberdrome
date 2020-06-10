'use strict';

class Numberdrome {
  constructor(...args) {
    this.list = args;
  }
  addNumber(n) {
    this.list.push(n);
  }
  removeNumber(n) {
    this.list = this.list.filter(item => item !== n);
  }
  sum() {
    return this.list.reduce((acc, item) => acc + item) || 0;
  }
  product() {
    return this.list.reduce((acc, item) => acc * item) || 1;
  }

  min() {
    return this.list.length ? Math.min(...this.list) : 'error';
  }
  max() {
    return this.list.length ? Math.max(...this.list) : 'error';
  }
}

module.exports = {
  Numberdrome,
};
