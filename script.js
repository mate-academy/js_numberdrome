class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  show() {
    if(this.numbers.length === 0) console.log('List is empty!');
    console.log(...this.numbers);
  }

  addNumber(num) {
    this.numbers.push(num);
  }

  removeNumber(num) {
    this.numbers.splice(this.numbers.indexOf(num), 1);
  }

  sum() {
    return this.numbers.reduce((sum, num) => sum + num, 0);
  }

  product() {
    if (this.numbers.length === 0) return 1;
    return this.numbers.reduce((sum, num) => sum * num, 1);
  }
  
  min() {
    if (this.numbers.length === 0) console.log('List is empty!')
    return Math.min(...this.numbers);
  }

  max() {
    if (this.numbers.length === 0) console.log('List is empty!')
    return Math.max(...this.numbers);
  }
}


let n = new Numberdrome();
n.show();
console.log(`suma: ${n.sum()}`);
n.addNumber(1);
n.addNumber(2);
n.addNumber(3);
n.addNumber(4);
n.show();
n.removeNumber(2);
n.show();
console.log(`suma: ${n.sum()}`);
console.log(`min: ${n.min()}`);
console.log(`max: ${n.max()}`);
