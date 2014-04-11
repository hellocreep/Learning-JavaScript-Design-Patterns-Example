/**
 * Object Creation
 */

// Each of the following options will create a new empty object:
var newObject = {};
 
// or
var newObject = Object.create(Object.prototype);
 
// or
var newObject = new Object();


/**
 * Object properties
 */

// 1. Dot syntax

// Set properties
newObject.someKey = 'Hello World';
 
// Get properties
var value = newObject.someKey;

// 2. Square bracket syntax
 
// Set properties
newObject['someKey'] = 'Hello World';
 
// Get properties
var value = newObject['someKey'];

// ECMAScript 5 only compatible approaches

// 3. Object.defineProperty

// Set properties
Object.defineProperty(newObject, 'someKey', {
	value: 'for more control of the property\'s behavior',
	writable: true,
	enumerable: true,
	configurable: true
});

// 4. Object.defineProperties
 
// Set properties
Object.defineProperties(newObject, {
	'someKey': {
		value: 'Hello World',
		writable: true
	},
 
	'anotherKey': {
		value: 'Foo bar',
		writable: false
	}
});