'use strict';

class Numberdrome {
    constructor() {
        this.numbers = [];
    }

    addNumber(n) {
        this.numbers.push(n);
        return this.numbers
    }

    removeNumber(n) {
        return this.numbers.filter(num => num !== n)
    }

    sum() {
        if (this.numbers.length !== 0) {
            return this.numbers.reduce((a, b) => {return a + b})
        }
        return 0;
    }

    product() {
        if (this.numbers.length !== 0) {
            return this.numbers.reduce((a, b) => {return a * b})
        }
        return 1;
    }

    min() {
        if (this.numbers.length !== 0) {
            return Math.min.apply(null, this.numbers)
        }
        return ('Error: The Numberdrome is empty')
    }

    max() {
        if (this.numbers.length !== 0) {
            return Math.max.apply(null, this.numbers)
        }
        return ('Error: The Numberdrome is empty')
    }

}

const numbersList = new Numberdrome();
console.log(numbersList.addNumber(56));
console.log(numbersList.addNumber(102));
console.log(numbersList.addNumber(3));
console.log(numbersList.addNumber(507));
console.log(numbersList.addNumber(81));
console.log(numbersList.addNumber(102));

console.log(numbersList.removeNumber(102));

console.log(numbersList.sum());
console.log(numbersList.product());
console.log(numbersList.min());
console.log(numbersList.max());


