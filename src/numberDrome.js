class Numberdrome {
  constructor(...args) {
    this.numbersArr = args; 
  }

  addNumber(...n) {
    for (let i = 0; i < n.length; i++) {
      if (isFinite(n[i])) {
        this.numbersArr.push(n[i]); 
      } else (
        console.log(`${n[i]} is not a number. Try only number`)
      )
    }
  }

  removeNumber(n) {
    const index = this.numbersArr.indexOf(n); 
    if (index != -1) {
      this.numbersArr.splice(index, 1); 
    } else {
      console.log('There is nothing to delete'); 
    }
  }

  sum() {
    console.log(this.numbersArr.reduce((sum, current) => sum + current)); 
  }

  product() {
    console.log(this.numbersArr.reduce((sum, current) => sum * current));
  }

  min() {
    console.log(Math.min.apply(null, this.numbersArr)); 
  }

  max() {
    console.log(Math.max.apply(null, this.numbersArr)); 
  }
}