class Numberdrome {

  constructor() {
    this.numbers = [];
  }

  addNumber(num) {
    this.numbers.push(num);
    return `${num} added to list`
  }

  removeNumber(num){
    this.numbers = this.numbers.filter(e => e !== num);
    return `${num} removed from list`
  }

  sum() {
    return `sum = ${this.numbers.reduce((acc, curr) => acc + curr, 0)}`;
  }

  product() {
    return `product = ${this.numbers.reduce((acc, curr) => acc * curr, 1)}`;
  }

  max() {
    return Numberdrome.checkArray(this.numbers, true);
  }

  min() {
    return Numberdrome.checkArray(this.numbers, false);
  }

  static checkArray(arrayVar, max) {
    if (arrayVar.length) {
      return max ? `max ${Math.max(...arrayVar)}` : `min ${Math.min(...arrayVar)}`;
    }
    return 'array is empty';
  }
}

let numberdrome = new Numberdrome();

console.log(numberdrome .addNumber(3));
console.log(numberdrome.addNumber(5));
console.log(numberdrome.addNumber(7));
console.log(numberdrome.removeNumber(3));
console.log(numberdrome.sum());
console.log(numberdrome.product());
console.log(numberdrome.max());
console.log(numberdrome.min());


