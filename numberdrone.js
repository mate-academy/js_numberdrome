class Numberdrome {
    constructor() {
      this.numbers = [];
    }
  
    addNumber(n) {
      this.numbers.push(n);
    }
  
    removeNumber(number) {
      this.numbers = this.numbers.filter(num => num !== number);
    }
  
    sum() {
      return this.numbers.reduce((reducer, num) => reducer + num, 0);
    }
  
    product() {
      return this.numbers.reduce((reducer, num) => reducer * num);
    }
  
    min() {
      return Math.min(...this.numbers);
    }
  
    max() {
      return Math.max(...this.numbers);
    }
  }
  
  const test = new Numberdrome;
  
  console.log(
    test.addNumber(0),
    test.addNumber(3),
    test.addNumber(5),
    test.addNumber(6),
    test.addNumber(8),
    test.removeNumber(6),
    test.sum(),
    test.product(),
    test.min(),
    test.max(),
    test.numbers
  )