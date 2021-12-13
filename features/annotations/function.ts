const add = (a: number, b:number): number => {
  return a + b;
}

const subtract = (a: number, b:number): number => {
  return a - b;
}

// function declaration
function multiply(a: number, b: number): number {
  return a * b;
}

// anonymous function
const divide = function(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
  return null;
  // if return type is void 
  // then it can return "null" and "undefined"
}

const throwError = (message: string): never => {
	throw new Error(message);
	// return 'asdf';
	// if return type is never
	// it can not return anything
}

const throwError2 = (message: string): void => {
  if(!message) {
    throw new Error(message);
  }
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecasts: {date: Date, weather: string}): void => {
  console.log(forecasts.date);
  console.log(forecasts.weather);
}

logWeather(todaysWeather);

// ES2015/ ES6 destructuring
const logWeather2 = ({ date, weather }: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}

logWeather2(todaysWeather)