class Numberdrome {
  constructor() {
    this.arr = [];
  }

  addNumber(n) {
    this.arr.push(n);
  }
  
  removeNumber(n) {
    const index = indexOf(n);
    if (!index === -1) {
      this.arr.splice(index, 1);
    }
  }
  
  sum() {
    return this.arr.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
  }
  
  product() {
    return this.arr.reduce((accumulator, currentValue) => (accumulator *= currentValue), 1);
  }
  
  max() {
    if (this.arr.length > 0) {
      return Math.max(...this.arr);
    }
    throw 'error';
  }
  
  min() {
    if (this.arr.length > 0) {
      return Math.min(...this.arr);
    }
    throw 'error';
  }
}