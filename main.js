'use strict';

class Numberdrome {
  constructor(){
    this.num = [];
  }

  addNumber(n) {
    if (typeof n === 'number'){
      this.num.push(n);
    }
  }
  removeNumber(n) {
    let index = this.num.indexOf(n);
    if(index === -1){
      return;
    }
    this.num.splice(index, 1);
  }
  sum(){
    if(this.num.length !== 0) {
      return this.num.reduce(((a, b) => a + b),0);
    }
  }
  product() {
    return this.num.reduce(((a, b) => a * b),1);
  }
  min(){
    return Math.min(...this.num);
  }
  max(){
    return Math.max(...this.num);
  }
}