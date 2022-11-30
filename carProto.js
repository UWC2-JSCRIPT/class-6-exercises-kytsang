/**
 * Car class
 * @constructor
 * @param {String} model
 */


class Car{
    constructor(model, currentSpeed, accelerateUnits, brakeUnits) {
         this.model = model;
         this.currentSpeed=currentSpeed;
         this.accelerateUnits=accelerateUnits;
         this.brakeUnits=brakeUnits;
    }

    toString= function(){
       let newSpeed= this.currentSpeed +(1* this.accelerateUnits)-(1* this.brakeUnits);
        
        console.log(`Car model ${this.model} is now at speed of ${newSpeed}`);
    }
}



//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const tacoma = new Car('tacoma', 0, 2, 1);
tacoma.toString();




/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

 class ElectricCar extends Car {
    constructor(model, currentSpeed, accelerateUnits, brakeUnits, motor){
        super(model, currentSpeed, accelerateUnits, brakeUnits);
        this.motor=motor;
    }
    toString= function(){
        let newSpeed= this.currentSpeed +(1* this.accelerateUnits*2)-(1* this.brakeUnits);
         
         console.log(`Car model ${this.model} is now at speed of ${newSpeed}`);
     }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const tesla = new ElectricCar('tesla', 0, 2, 1, 'electric');
tesla.toString();


