var basketModule = (function () {
 
  	// privates
 
	var basket = [];

	function doSomethingPrivate() {

	}

	function doSomethingElsePrivate() {

	}
 
	// Return an object exposed to the public
	return {
	 
		// Add items to our basket
		addItem: function(values) {
			basket.push(values);
		},
	 
		// Get the count of items in the basket
		getItemCount: function () {
			return basket.length;
		},
	 
		// Public alias to a  private function
		doSomething: doSomethingPrivate,
	 
		// Get the total value of items in the basket
		getTotal: function () {
	 
			var q = this.getItemCount(),
				p = 0;
	 
			while (q--) {
				p += basket[q].price;
			}
	 
		  	return p;
		}
  	};
})();

// basketModule returns an object with a public API we can use
 
basketModule.addItem({
	item: 'bread',
	price: 0.5
});
 
basketModule.addItem({
	item: 'butter',
	price: 0.3
});
