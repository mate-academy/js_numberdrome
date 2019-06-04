# Numberdrome

Create the `Numberdrome` class with the following methods:

- `constructor()`: initialization with the empty list of numbers;
- `addNumber(n)`: adds `n` to the list of numbers;
- `removeNumber(n)`: removes `n` from the list of numbers;
- `sum()`: returns the sum of all the numbers in the list (0 if there are no numbers in the list);
- `product()`: returns the product of all the numbers in the list (1 if there are no numbers in the list);
- `min()`: returns the least number from the list or throws an error if there are no numbers;
- `max()`: returns the largest number from the list or throws an error if there are no numbers.

let num = new Numberdrome();
num.addNumber(1);
num.addNumber(2);
num.addNumber(3);
num.addNumber(4);
num.addNumber(5);
num.removeNumber(2);
num.list();
console.log(num.sum());
console.log(num.product());
console.log(num.min());
console.log(num.max());

