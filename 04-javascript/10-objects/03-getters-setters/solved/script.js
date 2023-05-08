// Copy and paste the object from the last activity "02-using-this"
// Create getters and setters for 2 different properties in your object
// Use the privacy indicator on your properties that have getters and setters
// Use the getters and setters under your object to change and display the values of the properties that they effect.

const myCurrentCar = {
    _make: "ford",
    _model: "taurus",
    _year: 1998,
    get make(){
        return this._make;
    },
    set make(newMake){
        this._make = newMake;
    },
    get model(){
        return this._model;
    },
    set model(newModel){
        this._model = newModel;
    },
    get year(){
        return this._year;
    },
    set year(newYear){
        this._year = newYear;
    },
    getInfo(){
        return `This car is a ${this.year}, ${this.make} ${this.model}`
    }
}

console.log(myCurrentCar.getInfo())

// using our setters to update myCurrentCar
myCurrentCar.make = "kia"
myCurrentCar.model = "rio"
myCurrentCar.year = 1999


console.log(myCurrentCar.getInfo())





