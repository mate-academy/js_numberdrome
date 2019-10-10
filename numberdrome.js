class Numberdrome {
    constructor() {
        this.numbers = [];
    }

    addNumber(n) {
        if (!isNaN(n)) {
            return this.numbers.push(n)
        }
    };

    removeNumber(n) {
        let index = this.numbers.indexOf(n);
        return this.numbers.splice(index, 1);
    }

    sum() {
        return this.numbers.length > 0 ? this.numbers.reduce((a, b) => a + b) : 0;
    }

    product() {
        return this.numbers.length > 0 ? this.numbers.reduce((a, b) => a * b) : 1;
    }

    min() {
        try {
            if (this.numbers.length === 0) throw 'Error: Array is empty.'
        }
        catch(err) {
            return err;
        }
        return  Math.min.apply(null, this.numbers)
    }

    max() {
        try {
            if (this.numbers.length === 0) throw 'Error: Array is empty.'
        }
        catch(err) {
            return err;
        }
        return Math.max.apply(null, this.numbers)
    }
}

const positiveCheck =  new Numberdrome();
positiveCheck.addNumber(33);
positiveCheck.addNumber(0);
positiveCheck.addNumber(-21);
positiveCheck.addNumber(905);
console.log(positiveCheck.numbers); // [ 33, 0, -21, 905 ]
positiveCheck.removeNumber(0);
console.log(positiveCheck.numbers); // [ 33, -21, 905 ]
console.log(positiveCheck.sum()); // 917
console.log(positiveCheck.product()); // -627165
console.log(positiveCheck.min()); // -21
console.log(positiveCheck.max()); // 905

const negativeCheck =  new Numberdrome();
console.log(negativeCheck.numbers); // []
console.log(negativeCheck.sum()); // 0
console.log(negativeCheck.product()); // 1
console.log(negativeCheck.min()); // Error: Array is empty.
console.log(negativeCheck.max()); // Error: Array is empty.
