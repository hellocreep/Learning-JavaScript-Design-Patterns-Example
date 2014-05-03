require(['sword', 'summon', 'summonlist'],
function(Sword, Summon, SummonList) {

	function Me(name) {
		this.name = name;
		this.channels = {};
		this.spiritUid = -1;
		this.summons = new SummonList();
		this.enchantList = [];
		console.log('my name is ' + name);
	}

	// Decorator
	Me.enchant = {};

	Me.enchant.weapon = {
		attack: function(ATK) {
			return ATK + ATK * 2;
		}
	}

	Me.enchant.shellter = {
		underAttack: function() {

		}
	}

	// Singleton
	Me.prototype.getSword = function() {
		this.sword = Sword.getSword();
		console.log('I have a sword');
		return this;
	}

	// Add Observer
	Me.prototype.summon = function(type) {
		this.summons.add(new Summon(type));
		return this;
	}

	// Remove Observer
	Me.prototype.summonDestroy = function(summon) {
		this.summons.removeAt(this.summons.indexOf(summon, 0));
	}

	// Notity observer
	Me.prototype.summonCommand = function(command) {
		var summonCount = this.summons.count();
		for(var i = 0; i < observerCount; i++) {
			this.summons.get(i).execute(command, [].slice.call(arguments, 1));
		}
		return this;
	}

	// Subscribe
	Me.prototype.spiritControl = function(channel, func) {
		var channels = this.channels;
		if(!channels[channel]) channels[channel] = [];

		var token = (++this.spiritUid).toString();
		channels[channel].push({
			token: token,
			func: func
		});
	}

	// Publish
	Me.prototype.spiritCommand = function(channel) {
		if(!channels[channel]) return false;

		var spirits = channels[channel],
            len = spirits ? spirits.length : 0;
 
        while (len--) {
            spirits[len].func([].slice.call(arguments, 1));
        }
 
        return this;
	}

	// Unsubscribe
	Me.prototype.spiritRelease = function(token) {
		var channels = this.channels;
		for (var m in channels) {
            if (channels[m]) {
                for (var i = 0, j = channels[m].length; i < j; i++) {
                    if (channels[m][i].token === token) {
                        channels[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
	}	

	// Decorator
	Me.prototype.enchant = function(target) {
		this.enchantList.push(target);
	}

	// Meditor
	Me.prototype.transfer = function(target) {
		
	}

	return Me;

});