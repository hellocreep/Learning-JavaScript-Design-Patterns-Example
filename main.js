require.config({
	baseUrl: '.',
	paths: {
		'action': 'action',
		'player': 'player',
		'sword': 'sword',
		'sommonlist': 'sommon_list',
		'sommon': 'sommon'
	}
});

require(['action', 'player'],
function(Action, Player) {

	// Prototype
	Player.prototype = Object.create(Action);

	// Constructor
	var p1 = new Player('Roy');
	var p2 = new Player('Moss');


	// Singleton
	me.getSword();

	// Facade
	me.move({x: 100, y: 200});

	// Decorator
	me.enchant('weapon');


	me.attack();

	// Factory and Mixin
	me.summon('wraith');

	// Command
	me.summonCommand('move', 100, 200);

	// Pub/Sub
	me.spiritControl('move', p2.move);

	// Pub/Sub
	me.spiritCommand('move', 100, 200);

	// Command
	me.summonCommand('attack');

});