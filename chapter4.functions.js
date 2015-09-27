// method invocation
var counter = {
    value: 0,
    increment: function (inc) {
        console.log('this: ', this);
        this.value += typeof inc === 'number' ? inc : 1;
    },
};

console.log('Counter value: ', counter.value);
counter.increment();
console.log('Counter value: ', counter.value);

// function invocation
var add = function (a, b) {
    console.log('this: ', this);
    return a + b;
};
add(1, 2);

// constructor invocation
var Quo = function (string) {
    this.status = string;
};

Quo.prototype.getStatus = function () {
    return this.status;
};

var quo1 = new Quo('Nice!!');
console.log('Status: ', quo1.getStatus());
console.log('Status: ', quo1.status);

// apply invocations
var addMethodArguments = [2, 3];
var result = add.apply( , addMethodArguments);
console.log('Result: ', result);

// arguments 

var sumAll = function () {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    };
    console.log('Sum All Result: ', total);
    return total;
};

// exceptions

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'Arguments should be numbers, instead it was given: ' + a + ', ' + b,
        }
    }
    return a + b;
};

try {
    add("one", 2);
} catch (exception) {
    console.log('Exception caught: ', exception);
}

// augmenting

Number.prototype.integer = function () {
    return Math[this < 0 ? 'ceiling' : 'floor'](this);
};

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};

// closure
var counter = function () {
    var value =0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        },
    };
}();

var quo = function (status) {
    return {
        getStatus: function () {
            return status;
        },
    };
};

var quo2 = quo('Nice!!');
console.log('Status: ', quo2.getStatus());
console.log('Status: ', quo2.status);

// curry

Function.prototype.curry = function () {
    var slice = Array.prototype.slice,
         args = slice.apply(arguments),
         that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
};

var add = function (a, b) {
    return a + b;
};

var add8 = add.curry(8);
var result = add8(32);
console.log('Result: ', result);