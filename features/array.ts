const carMakers1 = ["Ford", "Ferrari", "Chevy", "Toyota"];
const carMakers2: string[] = ["Ford", "Ferrari", "Chevy", "Toyota"];
const carMakers3: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];
const carsByMake2: string[][] = [];

// help wit inference when extracting values
const car = carMakers1[0];
const myCar = carMakers1.pop();

// prevent adding incompatible values to array
carMakers1.push(100);

// help with map, reduce, forEach
carMakers1.map((car: string): string => {
  return car;
})