"use strict";
function doThing(thing) {
    return 0;
}
// const nums: number[] = []
var nums = [];
var colors = [];
var inputEl = document.querySelector('#username');
// console.dir(inputEl);
// console.log(inputEl.value);
var btn = document.querySelector(".btn");
// console.log(btn);
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
// identity<number>(7);
// identity<string>("suman");
// identity<Cat>({name: "Montu", breed: 'asd'});
function getRandomElement(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
console.log(getRandomElement(['suman', 'islam']));
console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7, 9]));
getRandomElement(["a", "n"]); // inferred Generic
