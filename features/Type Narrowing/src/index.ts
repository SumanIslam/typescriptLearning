function triple(value: number | string): number | string {
	if (typeof value === 'string') {
		return value.repeat(3);
	}
	return value * 3;
}

triple(9);

const el = document.getElementById('idk');

if (el) {
	el;
} else {
	el;
}

const printLetters = (word?: string) => {
	if (word) {
		for (const char of word) {
			console.log(char);
		}
	} else {
		console.log('You did not pass a word.');
	}
};

printLetters('SUMAN');

function someDemo(x: string | number, y: string | boolean) {
	if (x === y) {
		console.log(x.toUpperCase());
	}
}

someDemo('x', 'x');

interface Movie {
	title: string;
	duration: number;
}

interface TVShow {
	title: string;
	numOfEpisode: number;
	episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
	if ('numOfEpisode' in media) {
		return media.numOfEpisode * media.episodeDuration;
	}
	return media.duration;
}

console.log(getRuntime({ title: 'amadeus', duration: 145 }));
console.log(
	getRuntime({ title: 'spongebob', numOfEpisode: 80, episodeDuration: 145 })
);

function printFullDate(date: string | Date) {
	if (date instanceof Date) {
		console.log(date.toUTCString());
	} else {
		console.log(new Date(date).toUTCString());
	}
}

class User {
	constructor(public username: string) {}
}

class Company {
	constructor(public companyName: string) {}
}

function printName(entity: User | Company) {
	if (entity instanceof User) {
		entity;
	} else {
		entity;
	}
}

// type predicate

interface Cat {
	name: string;
	numLives: string;
}

interface Dog {
	name: string;
	breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined; 
}

function makeNoise(animal: Cat | Dog): string {
  if(isCat(animal)) {
    animal
    return "Meow"
  } else {
    animal
    return "Gheow Gheow"
  }
}