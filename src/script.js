'use strict';

class Numberdrome {
  constructor() {
		this.numbers =[];
	} 

	addNumber(n) {
		this.numbers.push(n);
	}

	removeNumber(n) {
		const index = this.numbers.indexOf(n);
		this.numbers.splice(index, 1);
	}

	sum() {
		return this.numbers.reduce((sum, number) => sum + number, 0);
	}

	product() {
		return this.numbers.reduce((sum, number) => sum * number, 1);
	}

	min() {
		if(this.numbers.length) {
			return Math.min(...this.numbers);
		}
		throw new Error('There are no numbers');	
	}

	max() {
		if(this.numbers.length) {
			return Math.max(...this.numbers);
		}
		throw new Error('There are no numbers');
	}
}

