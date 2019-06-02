class Numberdrome {
    constructor() {
        this.intArray = [];
    }

    addNumber(n) {
        this.intArray.push(n);
    }

    removeNumber(n) {
        let index = this.intArray.indexOf(n);
        if (index > -1) {
            this.intArray.splice(index, 1);
        }
    }

    sum() {
        return this.intArray.reduce((accumulator, a) => accumulator + a, 0);
    }

    product() {
        return this.intArray.reduce((accumulator, a) => accumulator * a, 1);
    }

    min() {
        if(this.intArray.length === 0) throw "exception";
        
        return Math.min.apply(null, this.intArray);
    }

    max() {
        if(this.intArray.length === 0) throw "exception";
    
        return Math.max.apply(null, this.intArray);
    }
}