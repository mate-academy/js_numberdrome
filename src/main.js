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
    return this.numbersList.reduce((sum, num) => sum + num, 0);
  }

  product() {
    return this.numbersList.forEach((product, num) => product * num, 1);
  }

  min() {
    if (!this.numbersList.length) {
      throw new Error("Incorrect data: can`t find minimum of empty array");
    };
    return Math.min(...this.numbersList);
  }

  max() {
    if (!this.numbersList.length) {
      throw new Error("Incorrect data: can`t find maximum of empty array");
    };
    return Math.max(...this.numbersList);
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
