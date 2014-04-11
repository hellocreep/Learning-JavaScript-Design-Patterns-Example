// Define a constructor
function Car(model, year, miles) {
	this.model = model;	
	this.year = year;
	this.miles = miles;

}

// Multiple Car objects can be created which access the same prototype.
Car.prototype.toString = function() {
	return this.model + 'has doen' + this.miles + 'miles';
}

// Usage
var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);