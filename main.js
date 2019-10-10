class Numberdrome {

  constructor() {
    this.numbers = [];
  }

  addNumber(num) {
    this.numbers.push(num);
    console.log(`${num} added to list`);
  }

  removeNumber(num){
    this.numbers = this.numbers.filter(e => e !== num);
    console.log(`${num} removed from list`);
  }

  sum() {
    console.log(`sum = ${this.numbers.reduce((acc, curr) => acc + curr, 0)}`)
  }

  product() {
    console.log(`product = ${this.numbers.reduce((acc, curr) => acc * curr, 1)}`)
  }

  max() {
    Numberdrome.checkArray(this.numbers, true);
  }

  min() {
    Numberdrome.checkArray(this.numbers, false);
  }

  static checkArray(arrayVar, maxTrueMinFalse) {
    if (Array.isArray(arrayVar) && arrayVar.length) {
      return console.log(maxTrueMinFalse ? `max ${Math.max(...arrayVar)}` : `min ${Math.min(...arrayVar)}`);
    }
    console.log('array is empty')
  }
}

let a = new Numberdrome();

a.addNumber(3);
a.addNumber(5);
a.addNumber(7);
a.removeNumber(3);
a.sum();
a.product();
a.max();
a.min();


