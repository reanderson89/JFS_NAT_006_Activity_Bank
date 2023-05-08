// Create a function that will return an object every time it is called
// Copy and paste your object from the last activity "03-getters-setters"
// Add in some default properties and values that all objects will be assigned
// Use the shorthand notation for your properties who are being assigned their value from the parameter of the function
// Make sure you are returning the object from the function

// Underneath the function, create 3 different objects by creating variables set to the value of the function you created and pass it arguments.
// print your objects to the console and also test out any of the methods on them

const carFactory = function (newMake, newModel, color) {
  let availableColors = ["red", "blue", "black"];
  if(!availableColors.includes(color)){
    return "That color is not available"
  }
  
    let newCar = {
    _make: newMake,
    _model: newModel,
    _year: 2023,
    // default properties, all objects get the same info
    numOfTires: 4,
    windShield: true,
    // shorthand notation for creating properties with same name as parameter
    color,
    get make() {
      return this._make;
    },
    get model() {
      return this._model;
    },
    get year() {
      return this._year;
    },
    getInfo() {
      return `This car is a ${this.year}, ${this.make} ${this.model}`;
    },
  };

  return newCar;
};

const hondaCivic = carFactory("Honda", "civic", "red")

console.log(hondaCivic.getInfo())

const f150 = carFactory("ford", "f-150", "black")

console.log(f150.getInfo())
