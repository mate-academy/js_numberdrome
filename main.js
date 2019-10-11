class Numberdrome {
  constructor() {
    this.numberdrome = new Set();
    const setlLength = this.numberdrome.length === 0;
  }

  addNumber(n) {
    this.numberdrome.add(n)
  }

  removeNumber(n) {
    this.numberdrome.delete(n)
  }

  sum() {
    let myArr = Array.from(this.numberdrome);
    if (this.setlLength) {
      return 0;
    } else {
      return myArr.reduce((a, b) => a + b, 0);
    }
  }

  product() {
    let myArr = Array.from(this.numberdrome);
    if (this.setlLength) {
      return 1;
    } else {
      return myArr.reduce((a, b) => a * b, 1);
    }
  }

  min() {
    if (this.setlLength) {
      return `Error! There are no numbers;`;
    } else {
      return Math.min(...this.numberdrome);
    }
  }

  max() {
    if (this.setlLength) {
      return `Error! There are no numbers;`;
    } else {
      return Math.max(...this.numberdrome);
    }
  }
}

// Usage

let someoneArray = new Numberdrome();
let elseArray = new Numberdrome();

someoneArray.addNumber(4);
someoneArray.addNumber(30);
someoneArray.addNumber(34);
someoneArray.sum();
someoneArray.removeNumber(34);
someoneArray.product();
someoneArray.min();
someoneArray.max();
console.log(`suma: ${someoneArray.sum()}`);
console.log(`product this numbers is: ${someoneArray.product()}`);
console.log(`min: ${someoneArray.min()}`);
console.log(`max: ${someoneArray.max()}`);

elseArray.addNumber(1);
elseArray.addNumber(2);
elseArray.addNumber(3);
elseArray.addNumber(4);
elseArray.removeNumber(2);
console.log(`suma: ${elseArray.sum()}`);
console.log(`product this numbers is: ${elseArray.product()}`);
console.log(`min: ${elseArray.min()}`);
console.log(`max: ${elseArray.max()}`);