
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

var PS4 = {
    relaseDate: '2014',
    price: '$500',
    gamesIncluded: [
        'The Last of Us',
        'Dragon Age Inquisition',
    ],
    getVersion: function () {
        return '3.15';
    },
};

var johnPS4 = Object.create(PS4);
johnPS4.newGames = ['Batman Arkham Knight'];
johnPS4.numberOfNewGames = function () {
    return this.newGames.length;
};


var printAllProperties = function (object) {
    console.log('----------------------------');
    console.log('object: ', object);
    for (var prop in object) {
        console.log(prop + '(' + (typeof johnPS4[prop]) + '): ', johnPS4[prop]);
    }
};

var printOwnProperties = function (object) {
    console.log('----------------------------');
    console.log('object: ', object);
    for (var prop in object) {
        if (johnPS4.hasOwnProperty(prop)) {
            console.log(prop + '(' + (typeof johnPS4[prop]) + '): ', johnPS4[prop]);
        }
    }
};

johnPS4.relaseDate = '2015';

printAllProperties(PS4);
printAllProperties(johnPS4);

delete johnPS4.relaseDate;
printAllProperties(johnPS4);