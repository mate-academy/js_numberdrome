class Numberdrome {
  constructor() {
    this.listOfNumbers = [];
  }

  addNumber(n) {
    if(typeof n !== 'number') {
      console.log('error')
    } else {
      this.listOfNumbers.push(n);
    }
  }

  removeNumber(n) {
    if(typeof n !== 'number') {
      console.log('error')
    } else {
      this.listOfNumbers.splice(this.listOfNumbers.indexOf(n), 1);
    }
  }

  sum() {
     return this.listOfNumbers.reduce((sum, curr) => {
      return sum + curr;
    }, 0)
  }

  product() {
    return this.listOfNumbers.reduce((product, curr) => {
      return product*curr;
    }, 1)
  }

  min() {
    return Math.min.apply(null, ...listOfNumbers);
  }

  max() {
    return Math.max.apply(null, ...listOfNumbers);
  }
}

