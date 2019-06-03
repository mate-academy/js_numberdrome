class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    if(Number.isInteger(n)) {
      this.numbers.push(n);
    }
  }

  removeNumber(n) {
    this.numbers = this.numbers.filter( item => item !== n)
  }
  
  sum() {
    const sum = this.numbers.reduce((acc, n) => {
      return acc + n;
    }, 0)

    return sum;
  }

  product() {
    const product = this.numbers.reduce((acc, n) => {
      return acc * n;
    }, 1)

    return product;
  }

  min() {
    if(this.numbers.length !== 0) {
      return Math.min(...this.numbers);
    } else {
      throw new Error('Array is empty');
    }
  }

  max() {
    if(this.numbers.length !== 0) {
      return Math.max(...this.numbers);
    } else {
      throw new Error('Array is empty');
    }
  }
  
}

const numberdrome = new Numberdrome();

numberdrome.addNumber(2);
numberdrome.addNumber(4);
numberdrome.addNumber(1);
numberdrome.removeNumber(2);
console.log(numberdrome.sum());
console.log(numberdrome.product());
console.log(numberdrome.min());
console.log(numberdrome.max());
