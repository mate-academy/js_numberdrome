class Numberdrome {
    constructor(array) {
        this.array = array;
    }

    addNumber(n) {
        return this.array.push(n);
    }

    removeNumber(n) {
        debugger;
        return this.array.splice(this.array.indexOf(n), 1);
    }

    sum() {
        let sum = 0;
        for (let number of this.array) {
            sum += number;
        }
        return sum;
    }

    product() {
        let product = 1;
        for (let number of this.array) {
            product *= number;
        }
        return product;
    }

    min() {
        if (this.array.length === 0) {
            throw "The list is empty!"
        }
        let min = this.array[0];
        for (let i = 1; i < this.array.length; i++) {
            if (this.array[i] < min) {
                min = this.array[i];
            }
        }
        return min;
    }

    max() {
        if (this.array.length === 0) {
            throw "The list is empty!"
        }
        let max = this.array[0];
        for (let i = 1; i < this.array.length; i++) {
            if (this.array[i] > max) {
                max = this.array[i];
            }
        }
        return max;
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

