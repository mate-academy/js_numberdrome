'use strict'

class Numberdrome {

    constructor() {
        this.numbersList = [];
    }

    addNumber(n) {
        this.numbersList.push(n);
    }

    removeNumber(n) {
        const nIndex = this.numbersList.indexOf(n);
        if (nIndex !== -1) {
            this.numbersList.splice(nIndex, 1);
        }
    }

    sum() {
        return this.numbersList.reduce((accumulator, num) => accumulator + num, 0);
    }

    product() {
        return this.numbersList.reduce((accumulator, num) => accumulator * num, 1);
    }

    min() {
        return Math.min(...this.numbersList);
    }

    max() {
        return Math.max(...this.numbersList);
    }

}