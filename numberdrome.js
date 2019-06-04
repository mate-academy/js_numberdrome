'use strict';
class Numberdrome {
  constructor() {
    this.listNumbers = [];
    }

  addNumber(n){
    this.listNumbers.push(n);
  }

  removeNumber(n) {
    this.listNumbers.splice(this.listNumbers.indexOf(n), 1);
  }

  sum() {
    let sumMembers = 0;
    if (this.listNumbers.length === 0) {
      return 0;
      }
    else {
      
        for (let i=0; i < this.listNumbers.length; i++) {
          sumMembers = sumMembers + this.listNumbers[i];
        }
        return sumMembers;
      }
  }   
    
  product() {
    let prodMembers = 1;
    if (this.listNumbers.length === 0) {
      return 0;
    }
    else {
        for (let i=0; i < this.listNumbers.length; i++) {
            prodMembers = prodMembers*this.listNumbers[i];
          }
      return prodMembers;
        }
    }
 
  min() {
    if (this.listNumbers.length === 0) {
        throw new Error('Emtpy array');
      }
    let min = this.listNumbers[0];
    for (let i = 1; i < this.listNumbers.length; i++) {
      if (this.listNumbers[i] < min) min = this.listNumbers[i];
    }
      return min;
    }

  max() {
    if (this.listNumbers.length === 0) {
        throw new Error('Emtpy array');
      }
    let max = this.listNumbers[0];
    for (let i = 1; i < this.listNumbers.length; i++) {
      if (this.listNumbers[i] > max) max = this.listNumbers[i];
    }
      return max;
    }
}






