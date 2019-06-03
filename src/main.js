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
  
  funcForMaxAndMin(maxOrMin) {
    try {
      if (!this.listOfNumbers.length) {
        throw new Error("List of number doesn't have numbers");
      };

      return maxOrMin === 'max' ? Math.max(...this.listOfNumbers) :
                                  Math.min(...this.listOfNumbers);
    } catch(e) {
      return e.message;
    }
  }

  min() {
    return this.funcForMaxAndMin();
  }

  max() {
    return this.funcForMaxAndMin('max');
  }

}

let newList = new Numberdrome();




newList.addNumber(32);
console.log(newList.max())
