//# Numberdrome
//Create the `Numberdrome` class with the following methods:
//- `constructor()`: initialization with the empty list of numbers;
//- `addNumber(n)`: adds `n` to the list of numbers;
//- `removeNumber(n)`: removes `n` from the list of numbers;
//- `sum()`: returns the sum of all the numbers in the list (0 if there are no numbers in the list);
//- `product()`: returns the product of all the numbers in the list (1 if there are no numbers in the list);
//- `min()`: returns the least number from the list or throws an error if there are no numbers;
//- `max()`: returns the largest number from the list or throws an error if there are no numbers.


class Numberdrome {

  constructor() {
    this.array = [];
  }

  addNumber(n) {
    if (typeof n == 'number'){
      this.array.push(n);
    } 
  }

  removeNumber(n) {
    if (typeof n == 'number') {
    let position = this.array.indexOf(n);
    this.array.splice(position, 1);
    }
    else {
        return 'not a number';
    }
  }

  sum() {
    return this.array.reduce((a, b) => a + b, 0);
  }

  product() {
    return this.array.reduce((a,b) => a * b, 1);
  }

  min() {
    return this.array.length !== 0 ? Math.min(...this.array) : 'empty array';
  }

  max() {
    return this.array.length !== 0 ? Math.max(...this.array) : 'empty array';
  }
} 
