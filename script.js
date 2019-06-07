class Numberdrome {
  constructor() {
    this.numberList = [];
  }

  addNumber(input) {
    if (Array.isArray(input)) {
      input.forEach(item => {
        const num = parseFloat(item);
        isNaN(num) || this.numberList.push(num);
      })
      return this.numberList;
    }
    const num = parseFloat(input);
    if (!isNaN(num)) {
      this.numberList.push(num);
      return this.numberList;
    } else {
      throw new Error('Invalid input');
    }
  }

  removeNumber(input) {
    if (Array.isArray(input)) {
      input.forEach(item => {
        this.numberList.splice(this.numberList.findIndex(el => el === item), 1);
      })
      return this.numberList;
    }
    const num = parseFloat(input);
    if (!isNaN(num)) {
      this.numberList.splice(this.numberList.findIndex(el => el === num), 1);
      return this.numberList;
    } else {
      throw new Error('Invalid input');
    }
  }

  sum() {
    return this.numberList.reduce((acc, item) => acc + item);
  }

  product() {
    return this.numberList.reduce((acc, item) => acc * item);
  }

  min() {
    return Math.min(...this.numberList);
  }

  max() {
    return Math.max(...this.numberList);
  }
};

const test1 = new Numberdrome();
console.log(test1.addNumber(1));
console.log(test1.addNumber([3, 5]));
console.log(test1.addNumber(9));
console.log(test1.addNumber(-6));
console.log(test1.removeNumber(-6));
console.log(test1.removeNumber([9, 1]));
console.log(test1.sum());
console.log(test1.product());
console.log(test1.min());
console.log(test1.max());
