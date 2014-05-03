require('action', function() {
	var Action = {
		move: function() {
			var args = [].slice.call(arguments),
				toString = Object.prototype.toString;

			switch(args.length) {
				case 1:
					if(typeof args[0] === 'string') {
						console.log('move to' + args[0]);
					}
					if(toString.call(args[0]) == '[object Array]') {
						console.log('move to' + args[0][0] + args[0][1]);
					}
					if(toString.call(args[1]) == '[object Object]') {
						console.log('move to' + args[0].x + args[0].y);
					}
					break;
				case 2:
					console.log('move to' + args[0] + args[1]);
					break;
			}
		},
		attack: function() {
			var ATK = this.ATK,
			max = this.enchantList.length;

			if(this.enchantList.indexOf('weapon') !== -1) {
				ATK = this.constructor.enchant.weapon.attack(ATK);
			} 

			return ATK;
		},
		underAttack: function() {
			
		}
	}

	return Action;
});