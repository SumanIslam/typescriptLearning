class Player {
	protected _score: number = 0;

	constructor(public first: string, public last: string) {}

	get fullName(): string {
		return `${this.first} ${this.last}`;
	}

	get score(): number {
		return this._score;
	}

	set score(newScore: number) {
		if (newScore < 0) {
			throw new Error('Score can not be negative');
		}
		this._score = newScore;
	}
}

class SuperPlayer extends Player {
	public admin: boolean = true;
	maxScore() {
		this._score = 999;
	}
}

const elton = new Player('Elton', 'Steele');
// console.log(elton);

// console.log(elton.fullName);
// console.log(elton.score);
// elton.score  = 23
// console.log(elton.score);

interface Colorful {
	color: String;
}

interface Printable {
	print(): void;
}

class Bike implements Colorful {
	constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
	constructor(public brand: string, public color: string) {}
	print(): void {
		console.log(`${this.color} ${this.brand} jacket`);
	}
}

const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
// console.log(bike1, jacket1);

// jacket1.print();

abstract class Employee {
	constructor(public first: string, public last: string) {}
	abstract getPay(): number;
	greed() {
		console.log('Hello');
	}
}

class FullTimeEmployee extends Employee {
	constructor(first: string, last: string, private salary: number) {
		super(first, last);
	}
	getPay(): number {
		return this.salary;
	}
}

class PartTimeEmployee extends Employee {
	constructor(
		first: string,
		last: string,
		private hourlyRate: number,
		private hoursWorked: number
	) {
		super(first, last);
	}
	getPay(): number {
		return this.hourlyRate * this.hoursWorked;
	}
}


const betty = new FullTimeEmployee('Betty', "white", 95000);
const bill = new PartTimeEmployee('Bill', "steele", 24, 1100)

console.log(betty.getPay());
console.log(bill.getPay());