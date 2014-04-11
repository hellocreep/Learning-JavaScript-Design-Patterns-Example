var Singleton = (function() {
	// Instance stores a reference to the Singleton
	var instance;

	function init() {
		// Singleton
 
	    // Private methods and variables
	    function privateMethod(){
	        console.log('I am private');
	    }

	    var privateVariable = 'Im also private';
 
    	var privateRandomNumber = Math.random();

    	return {
    		// Public methods and variables
			publicMethod: function () {
				console.log('The public can see me!');
			},
			publicProperty: 'I am also public',
			getRandomNumber: function() {
        		return privateRandomNumber;
      		}
    	}
	}

	return {
		getInstance: function() {
			if(!instance) {
				instance = init();
			}
			return instance;
		}
	}
})();


// Usage

var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();

console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true