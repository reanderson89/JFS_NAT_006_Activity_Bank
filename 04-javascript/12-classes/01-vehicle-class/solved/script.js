// Create a class called Vehicle
// This class should have 4 properties that are general to all vehicles. Example: type, hasMotor, color, weight
// The class should also have 2 methods, one method that checks if the vehicle has a motor, if it does it should return "vroom vroom"
// The second method is up to you. Could be a method that returns the color and weight of the vehicle
// Create 2 objects from your Vehicle class

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
        }
    }

    displayInfo(){
        console.log(`This vehicle is a ${this.type}, it is ${this.color}, and weights ${this.weight}`)
    }
}

const car = new Vehicle("car", true, "grey", 1200)




