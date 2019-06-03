function findExtremumInList(list, findHighest) {
  if (list.length === 0) {
    throw new Error(`Cann't get result because there is an empty list`);
  } else {
    return list.reduce(
      (extremum, number) => ((findHighest ? 1: -1) * (number - extremum) < 0)
        ? number
        : extremum
      , list[0]
    );
  }
}

class Numberdrome {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  removeNumber(n) {
    this.numbers.splice(this.numbers.indexOf(n), 1);
  }

  sum() {
    return this.numbers.reduce((acc, number) => acc += number, 0);
  }

  product() {
    return this.numbers.reduce((acc, number) => acc *= number, 1);
  }

  min() {
    return findExtremumInList(this.numbers, false);
  }

  max() {
    return findExtremumInList(this.numbers, true);
  }
}
