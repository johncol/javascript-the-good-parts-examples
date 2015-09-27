// pseudoclasical inheritance model

var Mammal = function (name) {
	this.name = name;
};

Mammal.prototype.getName = function () {
	return this.name;
};

Mammal.prototype.says = function () {
	return this.saying || '';
};

var Cat = function (name) {
	this.name = name;
	this.saying = 'Meow';
};

Cat.prototype = new Mammal();

Cat.prototype.purr = function (n) {
	var s = '';
	for (var i = 0; i < n; i++) {
		if (s) {
			s += '-';
		}
		s += 'r';
	}
	return s;
};

Cat.prototype.getName = function () {
	return this.says() + ' ' + this.name + ' ' + this.says();
};

var goku = new Cat('Goku');
console.log(goku.says());
console.log(goku.purr(3));
console.log(goku.getName());

// prototype inheritance model

var mammal = {
	name: 'Herb The Mammal',
	getName: function () {
		return this.name;
	},
	says: function () {
		return this.saying || '';
	},
};

var cat = Object.create(mammal);
cat.name = 'Goku';
cat.saying = 'meow';

cat.purr = function (n) {
	var s = '';
	for (var i = 0; i < n; i++) {
		if (s) {
			s += '-';
		}
		s += 'r';
	}
	return s;
};

cat.getName = function () {
	return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log(cat.says());
console.log(cat.purr(3));
console.log(cat.getName());

// funcional model

var mammal = function (spec) {

	var name = (spec && spec.name) || 'Mammal Animal';
	var saying = (spec && spec.saying) || '';

	var getName = function () { return name; };
	var says = function () { return saying; };

	var that = {};

	that.getName = getName;
	that.says = says;

	return that;

};

var cat = function (spec) {

	spec.saying = spec.saying || 'meow';

	var that = mammal(spec);

	that.getName = function () {
		return that.says() + ' ' + spec.name + ' ' + that.says();
	};

	that.purr = function (n) {
		var s = '';
		for (var i = 0; i < n; i++) {
			if (s) {
				s += '-';
			}
			s += 'r';
		}
		return s;
	};;

	return that;

};
