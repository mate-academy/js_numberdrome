'use strict';
document.addEventListener('DOMContentLoaded', () => {
let numbers = new Numberdrome();
/*numbers.addNumber(1);
numbers.addNumber(2);
numbers.addNumber(3);
numbers.addNumber(2);*/
console.log(numbers.sum());
    console.log(numbers.product());
    console.log(numbers.min());
    console.log(numbers.max());
    numbers.removeNumber(3);
    console.log(numbers.numbers)
});
