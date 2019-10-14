class Numberdrome {
  constructor() {
    this.arr = [];
  }

  addNumber(n) {
    this.arr.push(n);
  }
  
  removeNumber(n) {
    if (!indexOf(n) === -1) {
      this.arr.splice(indexOf(n), 1);
    }
  }
  
  sum() {
    let result = 0;
    this.arr.forEach(item =>  result += item);
    return result;
  }
  
  product() {
    let product = 1;
    this.arr.forEach(item => product *= item);
    return product;
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