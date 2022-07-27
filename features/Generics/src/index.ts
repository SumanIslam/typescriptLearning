function doThing(thing: number | string): number | string {
  return 0;
}

// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// console.dir(inputEl);
// console.log(inputEl.value);

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// console.log(btn);


function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }

interface Cat {
  name: string;
  breed: string;
}

function identity<T>(item: T): T {
  return item;
}

// identity<number>(7);
// identity<string>("suman");
// identity<Cat>({name: "Montu", breed: 'asd'});

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(getRandomElement<string>(['suman', 'islam']));
console.log(getRandomElement<number>([1, 2,3,4,5,6,7,9]));