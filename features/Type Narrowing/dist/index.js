"use strict";
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
triple(9);
var el = document.getElementById('idk');
if (el) {
    el;
}
else {
    el;
}
var printLetters = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char);
        }
    }
    else {
        console.log('You did not pass a word.');
    }
};
printLetters('SUMAN');
function someDemo(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
    }
}
someDemo('x', 'x');
function getRuntime(media) {
    if ('numOfEpisode' in media) {
        return media.numOfEpisode * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: 'amadeus', duration: 145 }));
console.log(getRuntime({ title: 'spongebob', numOfEpisode: 80, episodeDuration: 145 }));
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company(companyName) {
        this.companyName = companyName;
    }
    return Company;
}());
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return 'Meow';
    }
    else {
        animal;
        return 'Gheow Gheow';
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case 'pig':
            return 'Oink';
        case 'cow':
            return 'Moooo!';
        case 'rooster':
            return 'cokadoodledooo';
        case 'sheep':
            return "Baaa!";
        default:
            // we should never make it here if we handled all the case correctly
            var _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
var stevie = {
    name: 'Stevie Chicks',
    weight: 2,
    age: 1.5,
    kind: 'rooster',
};
console.log(getFarmAnimalSound(stevie));
