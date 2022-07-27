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
        console.log("You did not pass a word.");
    }
};
printLetters("SUMAN");
function someDemo(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
    }
}
someDemo("x", "x");
