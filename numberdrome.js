class Numberdrome {
  constructor() {
    this.array = []
  }

  addNumber(n) {
    this.array.push(n);
  }

  removeNumber(n) {
    let deletedNumber = this.array.indexOf(n);
    return this.array.splice(deletedNumber, 1);
  }

  sum() {
    if (this.array.length === 0) {
      return 0;
    } else {
      return this.array.reduce((a, b) => a + b, 0);
    }
  }

  product() {
    if (this.array.length === 0) {
      return 1;
    } else {
      return this.array.reduce((a, b) => a * b);
    }
  }

  min() {
    return this.array.length === 0 ? 'Fail!' : Math.min(...this.array);
  }

  max() {
    return this.array.length === 0 ? 'Fail!' : Math.max(...this.array);
  }
}