class Numberdrome {

    constructor() {
        this.numbers = [];
    }


    addNumber(n) {
        this.numbers.push(n);
    }

    removeNumber(n) {
        this.numbers.splice(this.numbers.indexOf(n), 1);
    }

    sum(){
        return this.numbers.length > 0 ? this.numbers.reduce((a,b) => a + b, 0) : 0;
    }

    product() {
        return  this.numbers.length > 0 ? this.numbers.reduce((a,b) => a * b, 1) : 1;
    }

    max() {
        return Math.max(...this.numbers);
    }

    min() {
        try {
            if (this.numbers.length <= 0) {
                throw new RangeError("There is no numbers in array");
            } else {
                return Math.min(...this.numbers);
            }
        }
        catch(err) {
            return err;
        }
    }

    max() {
        try {
            if (this.numbers.length <= 0) {
                throw new RangeError("There is no numbers in array");
            } else {
                return Math.max(...this.numbers);
            }
        }
        catch(err) {
            return err;
        }
    }

    display() {
        console.log(this.numbers);
    }
}


let arrayWithNumbers = new Numberdrome();
arrayWithNumbers.addNumber(2);
arrayWithNumbers.addNumber(5);
arrayWithNumbers.addNumber(10);
arrayWithNumbers.addNumber(20);
arrayWithNumbers.addNumber(30);
arrayWithNumbers.display();
arrayWithNumbers.removeNumber(30);
arrayWithNumbers.display();
console.log(arrayWithNumbers.sum());
console.log(arrayWithNumbers.product());
console.log(arrayWithNumbers.min());
console.log(arrayWithNumbers.max());

let emptyArray = new Numberdrome();
console.log(`Here should be 0 and this what we get: ${emptyArray.sum()}`);
console.log(`Here should be 1 and this what we get: ${emptyArray.product()}`);
console.log(emptyArray.min());
console.log(emptyArray.max());
