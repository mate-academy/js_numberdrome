class Numberdrome {
  constructor(...args) {
    this.numbersArr = args; 
  }

  addNumber(...n) {
    for (let i = 0; i < n.length; i++) {
      if (isFinite(n[i])) {
        this.numbersArr.push(n[i]); 
      } else {
        return `${n[i]} is not a number. Try only number`; 
      }  
    }
  }

  removeNumber(n) {
    const index = this.numbersArr.indexOf(n); 
    if (index != -1) {
      this.numbersArr.splice(index, 1); 
    } else {
      return 'There is nothing to delete'; 
    }
  }

  sum() {
    return this.numbersArr.reduce((sum, current) => sum + current); 
  }

  product() {
    return this.numbersArr.reduce((sum, current) => sum * current);
  }

  min() {
    return Math.min(...this.numbersArr); 
  }

  max() {
    return Math.max(...this.numbersArr); 
  }
}

