"use strict";

class Numberdrome {
    constructor() {
        this.numberList = []; 
        this.errorIsEmpty = 'Number list is Empty';
    }

    addNumber(n) {
        this.numberList.push(n);
    }

    removeNumber(n) {
        this.numberList.splice(this.numberList.indexOf(n), 1)
    }

    sum() {
        return this.numberList.reduce((acc, n) => acc + n, 0);
    }

    product() {
        return this.numberList.reduce((acc, n) => acc * n, 1);
    }

    min() {
        if (this.numberList.length !== 0) {
            return Math.min(...this.numberList);
        } else {
            throw new Error(this.errorIsEmpty);
        }
    }

    max() {
        if (this.numberList.length !== 0) {
            return Math.max(...this.numberList);
        } else {
            throw new Error(this.errorIsEmpty)
        }
    }
}