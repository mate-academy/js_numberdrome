class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    const index = this.numbers.findIndex(num => num === n);
    this.numbers.splice(index, 1);
  }

  sum() {
    if (this.numbers.length) {
      return this.numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    } else {
      return 0;
    }
  }

  product() {
    if (this.numbers.length) {
      return this.numbers.reduce(
        (accumulator, currentValue) => accumulator * currentValue
      );
    } else {
      return 1;
    }
  }

  min() {
    if (this.numbers.length) {
      let min = Infinity;
      this.numbers.map(a => {
        if (a < min) {
          min = a;
        }
      })    
      return min;
    } else {
      return console.log('error: there are no numbers');
    }
  }

  max() {
    if (this.numbers.length) {
      let max = -Infinity;
      this.numbers.map(a => {
        if (a > max) {
          max = a;
        }
      })    
      return max;
    } else {
      return console.log('error: there are no numbers');
    }
  }
} 

const a = new Numberdrome();

a.addNumber(1);
a.addNumber(2);
a.addNumber(3);
a.sum();
a.product();
a.min();
a.max();
a.removeNumber(2);
