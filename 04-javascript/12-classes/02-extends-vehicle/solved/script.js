// Start by copying and pasting your Vehicle class from the last activity below
// Create 2 child classes that extend the Vehicle class. Examples: Car, Bike, Boat, Airplane
// Give each child class at least 2 properties and 1 method
// Use the super() to pass information back to the parent class
// create 2 objects from each child class


class Vehicle {
    constructor(type, hasMotor, color, weight){
        this.type = type;
        this.hasMotor = hasMotor;
        this.color = color;
        this.weight = weight;
    }

    motorized(){
        if(this.hasMotor){
            return "Vroom Vroom!"
        }else{
            return " womp womp"
        }
    }

    displayInfo(){
        console.log(`This vehicle is a ${this.type}, it is ${this.color}, and weights ${this.weight}`)
    }
}

class Bike extends Vehicle {
    constructor(type, hasMotor, color, weight, hasBells, hasTassels, hasBasket){
        super(type, hasMotor, color, weight)
        this.hasBells = hasBells;
        this.hasTassels = hasTassels;
        this.hasBasket = hasBasket;
    }

    checkCoolness(){
        if(this.hasBells && this.hasTassels){
            return "SO COOL!"
        }
    }
}

const tricycle = new Bike("awesome bike", false, "purple", 15, true, true, true)

console.log(tricycle.motorized())