class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    this.list.push(n)
  }

  removeNumber(n) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === n) {
        this.list.splice(i);
      }
    }
  }

  sum() {
    if (this.list.length === 0) {
      return 0;
    }
    const result = this.list.reduce((sum, current) => {
      return sum + current;
    });

    return result;
  }

  product() {
    if (this.list.length === 0) {
      return 1;
    }
    const result = this.list.reduce((sum, current) => {
      return sum * current;
    });

    return result;
  }

  min() {
    const sorted = this.list.sort((a,b) => a-b);
    return this.list.length === 0 ? 'error' : this.list[0];
  }

  max() {
    const sorted = this.list.sort((a,b) => a-b);
    return this.list.length === 0 ? 'error' : this.list[this.list.length - 1];
  }
}