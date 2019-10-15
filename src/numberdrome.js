class Numberdrome {
    constructor(array) {
        this.array = array;
    }

    addNumber(n) {
        return this.array.push(n);
    }

    removeNumber(n) {
        let isNubmer = /^\d+$/;
        if (isNubmer.test(n)) {
            return this.array.splice(this.array.indexOf(n), 1);
        } else {
            throw "The value is not a number";
        }

    }

    sum() {
        return this.array.reduce((a, b) => a + b, 0);
    }

    product() {
        return this.array.reduce((a, b) => (a * b), 1);
    }

    min() {
        if (this.array.length === 0) {
            throw "The list is empty!"
        }
        return Math.min(...this.array);
    }

    max() {
        if (!this.array.length) {
            throw "The list is empty!"
        }
        return Math.max(...this.array);
    }
}

let numberdrome = new Numberdrome([2, 3, 4, 5, 6, 1, 4, 5, 6,]);

console.log(numberdrome.addNumber(10));
console.log(numberdrome);
console.log(numberdrome.removeNumber(3));
console.log(numberdrome);
console.log(numberdrome.sum());
console.log(numberdrome.product());
console.log(numberdrome.max());
console.log(numberdrome.min());

let numberdrome1 = new Numberdrome([]);

numberdrome1.min();

