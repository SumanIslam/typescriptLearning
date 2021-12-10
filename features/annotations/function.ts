const add = (a: number, b:number): number => {
  return a + b;
}

const substract = (a: number, b:number): number => {
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