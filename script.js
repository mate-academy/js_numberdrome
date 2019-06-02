class Numberdrome {
  constructor() {
    this.listOfNumbers = [];
  }

  addNumber(n) {
    this.listOfNumbers.push(n);
  }

  removeNumber(n) {
    while(this.listOfNumbers.includes(n)) {
      this.listOfNumbers.splice(this.listOfNumbers.indexOf(n), 1);
    }
    return this.listOfNumbers;
  }

  sum() {
    if (this.listOfNumbers.length === 0){
      return 0;
    }
    return this.listOfNumbers.reduce((sum, current) => sum + current);
  }

  product() {
    if (this.listOfNumbers.length === 0){
      return 1;
    }
    return this.listOfNumbers.reduce((sum, current) => sum * current);
  }

  min() {
    try {
    if (!this.listOfNumbers.length) {
      throw new Error("The list is empty");
    }
    this.listOfNumbers.sort((a, b) => a - b)
    return this.listOfNumbers[0];
    } catch(e) {
      return e.message;
    }
  }

  max() {
    try {
      if (!this.listOfNumbers.length) {
        throw new Error("The list is empty");
      }
      this.listOfNumbers.sort((a, b) => a - b);
      return this.listOfNumbers[this.listOfNumbers.length - 1];
      } catch(e) {
        return e.message;
    }
  }
}
