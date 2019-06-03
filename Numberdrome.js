'use strict';

class Numberdrome {
    constructor() {
        this.numbers = [];
    }

    addNumber(n) {
        this.numbers.push(n);
    }

    removeNumber(n) {
        this.numbers.splice(this.numbers.indexOf(n), 1);
    }

    sum() {
        return this.numbers.length === 0 ? 0 : this.numbers.reduce((sum, current) => {
            return sum + current;
        }, 0);
    }

    product() {
        return this.numbers.length === 0 ? 1 : this.numbers.reduce((prod, current) => {
            return prod * current;
        }, 1);
    }
    min() {
        try {
            if (!this.numbers.length) {
                throw 'list is empty!'
            }
            return Math.min(...this.numbers);
        } catch (e) {
            console.log(e);
        }
    }

    max() {
        try {
            if (!this.numbers.length) {
                throw 'list is empty!'
            }
            return Math.max(...this.numbers);
        } catch (e) {
            console.log(e);
        }
    }
}


