class Numberdrome {
    constructor() {
      this.list = [];
    }

    addNumber(n) {
      if (Number.isNaN(+n)) {
        throw 'This variable is unable to convert!';
      } else {
        this.list.push(+n);
      }
    }

    removeNumber(n) {
      if (this.list.indexOf(n) !== -1) {
        this.list.splice(this.list.indexOf(n), 1);
      }
    }

    sum() {
      return this.list.reduce(((a, b) => a + b), 0);
    }

    product() {
      return this.list.reduce(((a, b) => a * b), 1);
    }

    min() {
      if (this.list.length > 0) {
          return Math.min(...this.list);
      }

      throw new Error('There are no numbers');

    }

    max() {
      if (this.list.length > 0) {
          return Math.max(...this.list);
      }

      throw new Error('There are no numbers');
    }
}
