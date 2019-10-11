class Numberdrome{
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n);
  }

  removeNumber(n) {
    const index = this.list.indexOf(n);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  sum() {
    return this.list.reduce((a,b) => a + b, 0);
  }

  product() {
    return this.list.reduce((a,b) => a * b, 1);
  }

  min() {
    try {
      if (this.list.length === 0) throw new Error('there are no numbers');
    }
    catch(err) {
      return err;
    }
    return Math.min(...this.list);
  }

  max() {
    try {
      if (this.list.length === 0) throw new Error('there are no numbers');
    }
    catch(err) {
      return err;
    }
    return Math.max(...this.list);
  }
}