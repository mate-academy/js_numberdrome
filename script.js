class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumbers(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    const posN = this.numbers.indexOf(n);
    if (posN !== -1) {
      this.numbers.splice(posN, 1);
    }
  }

  sum() {
    let sumNumber = 0;
    if (this.numbers.length === 0) {
      return sumNumber
    }
    return this.numbers.reduce((acc, cur) => acc + cur, 0);
  }

  product() {
    let productNumber = 1;
    if (this.numbers.length === 0) {
      return productNumber;
    }
    for (let n of this.numbers) {
      productNumber *= n;
    }
    return productNumber;
  }

  min() {
    if (this.numbers.length === 0) return 'error';
    return (Math.min(...this.numbers) || 'error');
  }

  max() {
    if (this.numbers.length === 0) return 'error';
    return (Math.max(...this.numbers)  || 'error');
  }
}