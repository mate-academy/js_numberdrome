class Numberdrome {
  constructor() {
    this.num = [];
  }

  addNumber(n) {
    this.num.push(n);
  }

  removeNumber(n) {
    this.num.splice(this.num.indexOf(n), 1);
  }

  sum() {
    return this.num.reduce(((a, b) => a + b),0)
  }

  product() {
    return this.num.reduce(((a, b) => a * b), 1);
  }

  min() {
    return Math.min(...this.num);
  }

  max() {
    return Math.max(...this.num);
  }
}

const a = new Numberdrome();
a.addNumber(1);
a.addNumber(2);
a.addNumber(3);
a.addNumber(4);
a.addNumber(5);
console.log(a);
a.removeNumber(3);
console.log(a);

console.log('sum ' + a.sum());

console.log('product ' + a.product());
console.log('max ' + a.max());
console.log('min ' + a.min());