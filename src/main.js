class Numberdrome {
  constructor() {
    this.numbersList = [];
  }

  addNumber(n) {
    if (typeof n !== 'number' || !isFinite(n)) {
      return;
    }

    this.numbersList.push(n);
  }

  removeNumber(n) {
    this.numbersList.splice(this.numbersList.indexOf(n), 1);
  }

  sum() {
    let sum = 0;
    if (this.numbersList.length) {
      this.numbersList.forEach(num => sum += num);
    }

    return sum;
  }

  product() {
    let product = 1;
    if (this.numbersList.length) {
      this.numbersList.forEach(num => product *= num);
    }

    return product;
  }

  min() {
    try {
      if (!this.numbersList.length) {
        throw new Error("Incorrect data: can`t find minimum of empty array");
      };

      return Math.min(...this.numbersList);
    } catch(error) {
      return error.message;
    }
  }

  max() {
    try {
      if (!this.numbersList.length) {
        throw new Error("Incorrect data: can`t find maximum of empty array");
      };

      return Math.max(...this.numbersList);
    } catch(error) {
      return error.message;
    }
  }  
}

const test = new Numberdrome;

test.addNumber(5);
test.addNumber(9);
test.addNumber(51);
test.addNumber('2584');
test.addNumber(25);
test.addNumber(18);
test.addNumber(Infinity);
test.addNumber(63);

test.removeNumber(63);
test.removeNumber(51);
