class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    if (Number.isFinite(n)) {
      this.list.push(n);
    } else if (Array.isArray(n)) {
      n.forEach(num => {
        if (Number.isFinite(num)) {
          this.list.push(num)
        } else {
          throw new Error(`${num} is not a number`)
        }
      })
    } else {
      throw new Error(`${n} invalid input type`);
    }
  }

  removeNumber(n) {
    const numToRemove = +n;
    if (Number.isFinite(numToRemove)) {
      const filteredList = this.list.filter(num => num !== numToRemove);
      this.list = filteredList;
    } else {
      throw new Error('incorrect input number');
    }
  }

  sum() {
    const sumOfList = this.list.reduce((acc, num) => acc + num, 0);
    return sumOfList;
  }

  product() {
    const productOfList = this.list.reduce((acc, num) => acc * num, 1);
    return productOfList;
  }

  min() {
    return maxMin('min', this.list);
  }

  max() {
    return maxMin('max', this.list);
  }
}

function maxMin(maxOrMin, arr) {
  let result;
  switch (maxOrMin) {
    case 'max':
      result = Math.max(...arr);
      break;
    case 'min':
      result = Math.min(...arr);
      break;
  }

  if (Number.isFinite(result)) {
    return result;
  }

  throw new Error('Array is empty');
}