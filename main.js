'use strict'
class Numberdrome {
    constructor() {
        this.list = [];
    }

    addNumber(num) {
        this.list.push(+num);
        console.log(this.list);
    }

    removeNumber(num) {
        this.list.splice(this.list.indexOf(num), 1);
        console.log(this.list);
    }

    sum() {
        let result = 0;
        this.list.forEach(value => result += value);
        console.log(result);
    }

    product() {
        let result = 1;
        this.list.forEach(value => result *= value);
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
