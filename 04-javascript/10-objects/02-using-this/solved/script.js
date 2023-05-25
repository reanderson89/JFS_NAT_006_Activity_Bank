
// Create an object with 3 properties. 
// Create a method in the object that "returns" a string that contains all 3 properties in a sentence.
// print the return value of the method to the console

const fordTaurus = {
    make: "ford",
    model: "taurus",
    year: 1998,
    getInfo(){
        return `This car is a ${this.year}, ${this.make} ${this.model}`
    }
}



console.log(fordTaurus.getInfo())
