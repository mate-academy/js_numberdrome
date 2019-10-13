class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n);
  }

  removeNumber(n) {
    if (this.list.includes(n)) {
      this.list.splice(this.list.indexOf(n), 1);
    } else {
      return `There is no such number`;
    }
  }

  sum() {
    return this.list.reduce((x, y) => x + y, 0);
  }

  product() {
    return this.list.reduce((x, y) => x * y, 1);
  }

  min() {
    return this.list.length ? Math.min(...this.list) : `Your list is empty`;
  }

  max() {
    return this.list.length ? Math.max(...this.list) : `Your list is empty`;
  }
}
