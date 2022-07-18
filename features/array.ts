const carMakers1 = ["Ford", "Ferrari", "Chevy", "Toyota"];
const carMakers2: string[] = ["Ford", "Ferrari", "Chevy", "Toyota"];
const carMakers3: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];
const carsByMake2: string[][] = [];

// use cases
// 1. help with inference when extracting values
const car = carMakers1[0];
const myCar = carMakers1.pop();

// 2. prevent adding incompatible values to array
// carMakers1.push(100); // will show error

// 3. help with map, reduce, forEach
carMakers1.map((car: string): string => {
  return car;
})

// 4. flexible types
const importantDates = [new Date(), '2030-1-10'];
const importantDates2: (string | Date)[] = [new Date()];

importantDates2.push('2020-5-2');
importantDates2.push(new Date);
// importantDates2.push(100); // will show error