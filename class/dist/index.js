"use strict";
var Player = /** @class */ (function () {
    function Player(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    return Player;
}());
var elton = new Player("Elton", "Steele");
console.log(elton);