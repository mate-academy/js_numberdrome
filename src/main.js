"use strict"
class Numberdrome {
  constructor() {
    this.listOfNumbers = [];
  }

  addNumber(n) {
    this.listOfNumbers.push(n);
  }

  removeNubmer(n) {
    let index = this.listOfNumbers.indexOf(n);
    this.listOfNumbers.splice(index, 1);
  }

  sum() {
    return this.listOfNumbers.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }

  product() {
    return this.listOfNumbers.reduce((sum, current) => {
      return sum * current;
    }, 1);
  }
  
  _funcForMaxAndMin(maxOrMin) {
    
      if (!this.listOfNumbers.length) {
        throw new Error("List of number doesn't have numbers");
      } else {
        return maxOrMin === 'max' ? Math.max(...this.listOfNumbers) :
                                    Math.min(...this.listOfNumbers);
      }

  }

  min() {
    return this._funcForMaxAndMin();
  }

  max() {
    return this._funcForMaxAndMin('max');
  }

}

let newList = new Numberdrome();
