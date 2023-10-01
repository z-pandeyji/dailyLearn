function Car(fuel) {
  this.fuel = fuel;
}
Car.prototype.weather = 0;
Car.prototype.getDistanceCarCanTravel = function() {
  if (this.weather == 0) {
    return this.fuel * 10;
  }
  if (this.weather == 1) {
    return this.fuel * 5;
  }
  if (this.weather == 2) {
    return this.fuel * 2;
  }
};