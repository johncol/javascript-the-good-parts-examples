
var eventuality = function (that) {

	var registry = {};

	that.fire = function (event) {

		var type = typeof event === 'string' ? event : event.type;

		if (registry.hasOwnProperty(type)) {
			var handlers = registry[type];
			handlers.forEach(function (handler) {
				var functionHandler = 	handler.method;
				if (typeof functionHandler === 'string') {
					functionHandler = this[functionHandler];
				}
				functionHandler.apply(this, handler.parameters || [event]);
			});
		}

		return this;
	};

	that.on = function (type, method, parameters) {
		var handler = {
			method: method,
			parameters: parameters,
		};
		if (registry.hasOwnProperty(type)) {
			registry[type].push(handler);
		} else {
			registry[type]= [handler];
		}
		return this;
	};

};

var character = function (spec) {
	var name = spec.name || 'goku';
	var type = spec.tyoe || 'sayayin';
	var that = {
		getName: function () {
			return name;
		},
		getType: function () {
			return type;
		},
	};
	eventuality(that);
	return that;
};

var vegueta = character({
	type: 'sayayin warrior',
	name: 'Vegueta',
});

vegueta.on('attack', function () {
	console.log("You'll never beat me worm!!");
});

vegueta.on('attack', function () {
	console.log('die kakaroto!!!');
});

vegueta.fire('attack');

