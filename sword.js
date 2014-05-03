require('sword', function() {
	// Singleton

	var sword;

	function Sword() {
		console.log('Show Sword')
		this.ATK = 3;
	}

	Sword.prototype.hack = function() {
		console.log('hack')
	}

	function getSword() {
		if(sword) return sword;
		
		sword = new Sword;
	}

	return {
		getSword: getSword
	}
});