
 function Vehicale(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed;
  this.fuelType = fuelType;
}

// const MyVehicale = new Vehicale ("Nexa", "Trends", 80, "Petrol")
// console.log(MyVehicale);

Vehicale.prototype.accelerate = function() {
  this.speed += 10;
  return(`${this.brand} ${this.model} is accelerating.
  Current speed: ${this.speed} km/h`);
};

Vehicale.prototype.brake = function() {
  this.speed -= 5;
  return(`${this.brand} ${this.model} is braking.
  Current speed: ${this.speed} km/h`);
};

Vehicale.prototype.refuel = function() {
  return(`${this.brand} ${this.model} is refuelling.`);
};

function Car(brand, model, speed,fuelType, numberOfWheels) {
 Vehicale.call(this, brand, model, speed, fuelType);
 this.numberOfWheels = numberOfWheels;
}

Car.prototype = Object.create(Vehicale.prototype);

Car.prototype.honk = function() {
  return(`${this.brand} ${this.model} is honking.`);
};


function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
 Vehicale.call(this, brand, model, speed, fuelType);
 this.numberOfEngines = numberOfEngines;
 this.hasLandingGear = hasLandingGear;
}

Airplane.prototype = Object.create(Vehicale.prototype);

Airplane.prototype.takeOff = function() {
 return(`${this.brand} ${this.model} is take off.`);
}

const myCar = new Car("Nexa", "Trends", 0, "Petrol", 4)

console.log(myCar.refuel());
console.log(myCar.honk());
(myCar.accelerate());
(myCar.brake());


const myAirplane = new Airplane('Boeing', '788', 0, 'jet Fuel', 4, true);
console.log(myAirplane.accelerate());
console.log(myAirplane.brake());
console.log(myAirplane.refuel());
console.log(myAirplane.takeOff());