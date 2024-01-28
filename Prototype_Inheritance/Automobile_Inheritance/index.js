function Automobile(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

Automobile.prototype.start = function(){
  return `The ${this.year} ${this.make} ${this.model} is starting`
}

function FourWheeler(make, model, year, fuelType){
 Automobile.call(this, make, model, year);
 this.fuelType = fuelType;
}

FourWheeler.prototype = Object.create(Automobile.prototype);

const Mycar = new FourWheeler("Tata", "Nano", 2009, "Diesel")
 console.log(Mycar.start());
 console.log(Mycar);

