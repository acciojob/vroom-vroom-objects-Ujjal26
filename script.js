// Complete the js code
function Car(make, model) {
  // Ensure these assignments exist
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // The 'this' context must be passed to the Car constructor
  // to link the 'make' and 'model' properties to the SportsCar instance
  Car.call(this, make, model); 
  this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
