class Numberdrome {
    constructor() {
        this.numbers = [];
    }

    addNumber(n) {
        this.numbers.push(n);
        console.log(this.numbers);
    }

    removeNumber(n) {
        let index = this.numbers.indexOf(n);
        if (index > -1) {
            this.numbers.splice(index, 1);
        }
    }

    sum() {
        return this.numbers.reduce((a, b) => a + b, 0)
    }

    product() {
        return this.numbers.reduce((a, b) => a * b, 1);
    }

    min() {
        if (this.numbers.length === 0){
            throw new Error('error!');
        }
        return Math.min(...this.numbers);
    }

    max() {
        if (this.numbers.length === 0){
            throw new Error('error!');
        }
        return Math.max(...this.numbers);
    }

}

const arr = new Numberdrome();
arr.addNumber(1)
arr.addNumber(2)
arr.addNumber(13)
arr.removeNumber(1)
arr.sum()
arr.product()
arr.min()
arr.max()
arr.addNumber(8)

