let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let date: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false];

// class
class Car {

}

let car: Car = new Car();

// object literals
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
  
}

// when to use type annotations
// (1) Fuction that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// (2) when we declare a variable in one line and initialize it in another line
let words = ['red', 'green', 'blue'];
let foundWord: Boolean;

for (let i = 0; i < words.length; i++) {
  if(words[i] = "green") {
    foundWord = true;
  }
}

// (3) variable whose type can not be inferred correctly
const numbers = [-2, -15, 12];
let aboveZero: number | boolean = false;

for(let i=0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    aboveZero = numbers[i];
  }
}