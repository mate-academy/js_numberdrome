class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n);
  }

  removeNumber(n) {
    this.list.splice(this.list.indexOf(n), 1);
  }

  sum() {
    return this.list.reduce((x, y) => x + y, 0);
  }

  product() {
    return this.list.reduce((x, y) => x * y, 1);
  }

  min() {
    return this.list.length === 0 ? `Your list is empty` : Math.min(...this.list);
  }

  max() {
    return this.list.length === 0 ? `Your list is empty` : Math.max(...this.list);
  }
}