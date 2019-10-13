class Numberdrome {
  constructor() {
    this.numberList = [];
  }

  addNumber = function(n) {
    this.numberList.push(n);
  };

  removeNumber = function(n) {
    let index = this.numberList.indexOf(n);
    if (index !== -1) {
    this.numberList.splice(index, 1);
    } else {
      throw console.error('Такого елемента нет!');
    }
  };

  sum = function() {
    if (this.numberList.length == 0) {
      return [0];
    }
    return this.numberList.reduce((sum, i) => sum + i);
  };

  product = function() {
    if (this.numberList.length == 0) {
      return [1];
    }
    return this.numberList;
  };

  min = function() {
    if (this.numberList.length == 0) {
      throw new Error("Нет, елементов!. Добавь елементы для сравнения");
    }
    return Math.min(...this.numberList);
  };

  max = function() {
    if (this.numberList.length == 0) {
      throw new Error("Нет, елементов!. Добавь елементы для сравнения");
    }
    return Math.max(...this.numberList);
  };
}
