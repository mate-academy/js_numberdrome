// # Numberdrome
//
// Create the `Numberdrome` class with the following methods:
//
//     - `constructor()`: initialization with the empty list of numbers;
// - `addNumber(n)`: adds `n` to the list of numbers;
// - `removeNumber(n)`: removes `n` from the list of numbers;
// - `sum()`: returns the sum of all the numbers in the list (0 if there are no numbers in the list);
// - `product()`: returns the product of all the numbers in the list (1 if there are no numbers in the list);
// - `min()`: returns the least number from the list or throws an error if there are no numbers;
// - `max()`: returns the largest number from the list or throws an error if there are no numbers.

class Numberdrome {
    constructor() {
        this.list = [];
        console.log("Created new Numberdrome.");
    }

    addNumber(n) {
        this.list.push(n);
        console.log(`Element ${n} was added.`);
    }

    removeNumber(n) {
        const position = this.list.indexOf(n);
        if (position !== -1) {
            this.list.splice(position, 1);
            console.log(`Element ${n} was removed.`);
        } else {
            console.log(`Element ${n} was not found.`);
        }
    }

    sum() {
        const addNums = (accumulator, currentValue) => accumulator + currentValue;
        return this.list.reduce(addNums, 0);
    }

    product() {
        const productNums = (accumulator, currentValue) => accumulator * currentValue;
        return this.list.reduce(productNums, 1);
    }

    min() {
        return this.list.length ? Math.min(...this.list) : `No elements in list.`;
    }

    max() {
        return this.list.length ? Math.max(...this.list) : `No elements in list.`;
    }
}

let nd = new Numberdrome();

console.log(`Sum: ${nd.sum()}`);
console.log(`Product: ${nd.product()}`);
console.log(`Min: ${nd.min()}`);
console.log(`Max: ${nd.max()}`);


nd.addNumber(2);
nd.addNumber(3);
nd.addNumber(1);
nd.addNumber(4);
console.log(nd.list);
nd.removeNumber(3);
nd.removeNumber(5);
console.log(nd.list);

console.log(`Testing operations`);
console.log(`Sum: ${nd.sum()}`);
console.log(`Product: ${nd.product()}`);
console.log(`Min: ${nd.min()}`);
console.log(`Max: ${nd.max()}`);
