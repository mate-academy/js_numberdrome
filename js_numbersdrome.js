class Numberdrome{
  constructor() {
    this.list = new Set();
  }

  addNumber(n) {
    this.list.add(n);
  }

  removeNumber(n) {
    this.list.delete(n);
  }

  sum() {
    let res = 0;
    for (let num of this.list) {
      res += num;
    }
    return res;
  }

  product() {
    let res = 1;
    for (let num of this.list) {
      res *= num;
    }
    return res;
  }

  min() {
    try {
      if (this.list.size === 0) throw 'there are no numbers'
    }
    catch(err) {
      return err;
    }
    let res = Infinity;
    for (let num of this.list) {
      if (num < res) {
        res = num;
      }
    }
    return res;
  }

  max() {
    try {
      if (this.list.size === 0) throw 'there are no numbers'
    }
    catch(err) {
      return err;
    }
    let res = -Infinity;
    for (let num of this.list) {
      if (num > res) {
        res = num;
      }
    }
    return res;
  }
}