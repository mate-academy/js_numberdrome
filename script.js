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
    })
  }

  product() {
    return this.listOfNumbers.reduce((product, curr) => {
      return product*curr;
    })
  }

  min() {
    return Math.min.apply(null, this.listOfNumbers);
  }

  max() {
    return Math.max.apply(null, this.listOfNumbers);
  }
}

