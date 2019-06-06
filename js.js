'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n);
  }

  removeNumber(n) {
    this.list.splice(this.list.indexOf(n), 1)
  };

  sum() {
    let sumTotal = 0;
    if (this.list.length !== 0) {
      for (let i = 0; i <= this.list.length; i++) {
        sumTotal += this.list.length[i];
        return sumTotal;
      }
    }

      return sumTotal = 0;
  }

  product() {
    let prodTotal = 0;
    if (this.list.length !== 0) {
      for (let i=0; i<= this.list.length; i++) {
        prodTotal *= this.list[i];
        return prodTotal;
      }
    }

    return 1;
  }

  min() {
    let minNum;
    if (this.list.length !== 0) {
      return minNum = Math.min(...this.list);
    } else throw new Error('Mistake');
  }

  max() {
    let maxNum;
    if (this.list.length !== 0) {
      return maxNum = Math.max(...this.list);
    } else throw new Error('Mistake');
  }
}
