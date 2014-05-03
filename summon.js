require('summon', ['action'], function(Action) {

	// Mixin pattern
	function mixin(recever, extension) {
		for(var m in extension.prototype) {
			if(!Object.hasOwnProperty.call(recever.prototype, m)) {
				recever.prototype[m] = extension.prototype[m];
			}
		}

		return recever;
	}

	function Base() {
		
	}

	Base.prototype = Object.create(Action);	

	// Command pattern
	Base.prototype.execute = function(command) {
		this[command] && this[command].apply(this, [].slice.call(arguments, 1));
	}

	Base.prototype.destroy = function() {
		console.log('destroyed');
	}

	// Factory pattern
	function Summon(type) {
		switch(type) {
			case 'wraith':
				this.summon = Wraith;
				break;
			case 'knight':
				this.summon = Knight;
				break;
			default:
				this.summon = Wraith;
		}
		console.log('summon a Summon');

		mixin(this.summon, Base);

		return new this.summon;
	}

	function Wraith() {
		this.hp = 8;
		this.ATK = 4;
		console.log('Wraith');
	}

	function Knight() {
		this.hp = 10;
		this.ATK = 3;
		console.log('Knight');
	}

	return Summon;
});