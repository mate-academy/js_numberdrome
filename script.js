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
    this.listOfNumbers.reduce(function(sum, curr) {
      return sum+curr;
    }, 0)
  }

  product() {
    this.listOfNumbers.reduce(function(product, curr) {
      return product*curr;
    }, 0)
  }

  min() {
    return Math.min.apply(null, this.listOfNumbers);
  }

  max() {
    return Math.max.apply(null, this.listOfNumbers);
  }
}

