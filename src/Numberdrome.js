'use strict';

class Numberdrome {
  constructor() {
    this.list = [];
  };
  addNumber(n) {
    this.list.push(n);
  }
  removeNumber(n) {
    this.list = this.list.filter(element => element !== n);

    return this.list;
  }

  sum() {
    return this.list.reduce((sum, current) => sum + current, 0);
  }

  product() {
    return this.list.reduce((sum, current) => sum * current, 1);
  }

  min() {
    return (this.list.length === 0) ? Error : Math.min.apply(null, this.list);
  }

  max() {
    return (this.list.length === 0) ? Error : Math.max.apply(null, this.list);
  }
}

module.exports = {
  Numberdrome,
};
