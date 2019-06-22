function getRandomId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function Car(model, brand, year) {
  this.model = model;
  this.brand = brand;
  this.year = year;
  var id = getRandomId()
  this.getId = function () {
    return id
  }
}

Car.prototype.getCarName = function () {
  return this.model + ' ' + this.brand + ' ' + this.year;
}

var newCar = new Car('Suran', 'Volkswagen', 2015);

console.log(newCar.getCarName());
console.log(newCar.getId())
console.log(newCar.__proto__)


