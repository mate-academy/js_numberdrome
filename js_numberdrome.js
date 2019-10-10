class Numberdrome {
    constructor() {
        this.value = [];
    }

    addNumber(n) {
        this.value.push(n);
        return console.log(this.value);
    }

    removeNumber(n) {
        if (n >= 0) {
            const index = this.value.indexOf(n);
            this.value.splice(index, 1)
        }
        return console.log(this.value);
    }

    sum() {
        const result = this.value.reduce((sum, item) => sum + item, 0);
        return console.log(result);
    }

    product() {
        const result = this.value.reduce((sum, item) => sum * item, 1);
        return console.log(result);
    }

    min() {
        const result = Math.min(...this.value);
        return console.log(result);
    }

    max() {
        const result = Math.max(...this.value);
        return console.log(result);
    }
}

const magicNumber = new Numberdrome();

magicNumber.addNumber(12);
magicNumber.addNumber(13);
magicNumber.removeNumber(13);
magicNumber.addNumber(1);
magicNumber.addNumber(5);
magicNumber.addNumber(12);
magicNumber.sum();
magicNumber.product();
magicNumber.min();
magicNumber.max();
