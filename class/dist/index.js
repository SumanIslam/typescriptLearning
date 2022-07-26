"use strict";
var Player = /** @class */ (function () {
    function Player(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
    }
    return Player;
}());
var elton = new Player("Elton", "Steele");
console.log(elton);
// elton.score
