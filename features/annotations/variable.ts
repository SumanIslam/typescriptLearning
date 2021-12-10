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
const coordinates = JSON.parse(json);
console.log(coordinates);

