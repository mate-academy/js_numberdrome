class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n)
  }

  removeNumber(n) {
    this.list = this.list.filter(element => {
      return element !== n;
    });
  }

  sum() {
    const result = this.list.reduce((sum, current) => {
      return sum + current;
    }, 0);

    return result;
  }

  product() {
    const result = this.list.reduce((sum, current) => {
      return sum * current;
    }, 1);

    return result;
  }

  min() {
    return this.list.length === 0 ? 'error' : Math.min(...this.list);
  }

  max() {
    return this.list.length === 0 ? 'error' : Math.max(...this.list);
  }
}
