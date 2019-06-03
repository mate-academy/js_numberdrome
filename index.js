class Numberdrome {
    constructor() {
        this.numbers = [];
    }

    addNumber(n) {
        this.numbers.push(n);
    }

    removeNumber(n) {
        const numIndex = this.numbers.findIndex( item => {
            return item === n;
        });
        this.numbers.splice(numIndex, 1);
    }

    sum() {
        return this.numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        },0);
    }

    product() {
        return this.numbers.reduce((accumulator, currentValue) => {
            return accumulator * currentValue;
        },1);
    }

    min() {
        const numbers = this._numbersSort();
        return numbers[0];
    };

    max() {
        const numbers = this._numbersSort();
        return numbers[numbers.length - 1];
    };

    _numbersSort() {
        return this.numbers.sort();
    }
}




