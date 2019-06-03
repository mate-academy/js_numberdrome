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
