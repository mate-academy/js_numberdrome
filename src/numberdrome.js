'use strict'

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n);
  }

  removeNumber(n) {
    this.list.splice(this.list.indexOf(n), 1);
  }

  sum() {
    return this.list.reduce((a, b) => a + b, 0);
  }

  product() {
    return this.list.reduce((a, b) => a * b, 1);
  }

  min() {
    return this.list.length === 0 ? 'Error: Your list is empty.' : Math.min(...this.list);
  }

  max() {
    return this.list.length === 0 ? 'Error: Your list is empty.' : Math.max(...this.list);
 }
}

let n = new Numberdrome();

n.addNumber(1);
n.addNumber(2);
n.addNumber(3);
n.addNumber(4);
console.log('n.list = ' + n.list);

n.removeNumber(3);
console.log('n.list = ' + n.list);

console.log('n.sum() = ' + n.sum());
console.log('n.product() = ' + n.product());
console.log('n.min() = ' + n.min());
console.log('n.max() = ' + n.max());
