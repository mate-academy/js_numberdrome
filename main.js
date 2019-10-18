'use strict'
class Numberdrome {
    constructor() {
        this.list = [];
    }

    addNumber(num) {
        if(typeof n === 'number'){
    this.list.push(n);
} else {
    console.error('n is not a number.');
}
}

    removeNumber(num) {
        this.list.splice(this.list.indexOf(num), 1);
        console.log(this.list);
    }

    sum() {
        let result = 0;
        this.list.reduce((a, b) => a + b, 0);
        console.log(result);
    }

    product() {
        let result = 1;
        this.list.reduce((a, b) => a * b, 1);
        console.log(result);
    }

    min() {
        if (this.list.length) {
            return Math.min(...this.list);
        }
        throw new Error('There are no numbers');
    }

    max() {
        if (this.list.length) {
            return Math.max(...this.list);
        }
        throw new Error('There are no numbers');
    }
}
