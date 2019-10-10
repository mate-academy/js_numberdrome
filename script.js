'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    if (typeof n === 'number'){
      this.list.push(n);
    } 
  }

  removeNumber(n) {
    let index = this.list.indexOf(n);
    this.list.splice(index, 1);
  }

  sum() {
    return this.list.reduce((a, b) => a + b, 0);
  }

  product() {
    return this.list.reduce((a,b) => a * b, 1);
  }

  min() {
    return this.list.length !== 0 ? Math.min(...this.list) : 'List is empty';
  }

  max() {
    return this.list.length !== 0 ? Math.max(...this.list) : 'List is empty';
  }
}