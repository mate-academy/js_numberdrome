class Numberdrome {
    constructor() {
        this.numbers = [];
    }

    addNumber(n) {
        if (typeof n === 'number'){
            return this.numbers.push(n)
        } else {
            console.log('Error: Argument is not a number.') // пыталась понять как генерировать свои ошибки, не поняла:)
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
        return this.numbers.length > 0 ? Math.min.apply(null, this.numbers) :
            'Error: Array is empty.';
    }

    max() {
        return this.numbers.length > 0 ? Math.max.apply(null, this.numbers) :
            'Error: Array is empty.';
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
negativeCheck.addNumber('someString'); // Error: Argument is not a number.
console.log(negativeCheck.numbers); // []
console.log(negativeCheck.sum()); // 0
console.log(negativeCheck.product()); // 1
console.log(negativeCheck.min()); // Error: Array is empty.
console.log(negativeCheck.max()); // Error: Array is empty.
