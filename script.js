class Numberdrome {
    constructor() {
        this.array = [];
    }
    addNumber(number) {
        this.array.push(number);
        console.log(this.array);
    };
    sum() {
        if (this.array.length === 0) {
            return 0;
        } else {
            return this.array.reduce((a, b) => a + b, 0);
        }
    }
    removeNumber(number) {
        let indexNumber = this.array.indexOf(number);
        return this.array.splice(indexNumber, 1);
    }
    product() {
        if (this.array.length === 0) {
            return 1;
        } else {
            return this.array.reduce((a, b) => a * b);
        }
    }
    min() {
        if (this.array.length === 0) {
            return 'Error!';
        } else {
            return Math.min(...this.array);
        }
    }
    max() {
        if (this.array.length === 0) {
            return 'Error!';
        } else {
            return Math.max(...this.array);
        }
    }
}

const newArray = new Numberdrome();
// newArray.addNumber(30)
// newArray.addNumber(4)
// newArray.sum()
//  newArray.removeNumber(34);
// newArray.product();
// newArray.min();
// newArray.max();
