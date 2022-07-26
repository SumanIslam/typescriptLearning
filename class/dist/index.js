"use strict";
var Player = /** @class */ (function () {
    function Player(first, last) {
        this.first = first;
        this.last = last;
        this._score = 0;
    }
    Object.defineProperty(Player.prototype, "fullName", {
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error('Score can not be negative');
            }
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var elton = new Player("Elton", "Steele");
console.log(elton);
console.log(elton.fullName);
console.log(elton.score);
elton.score = 23;
console.log(elton.score);
