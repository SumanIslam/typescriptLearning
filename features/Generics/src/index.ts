function doThing(thing: number | string): number | string {
	return 0;
}

// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// console.dir(inputEl);
// console.log(inputEl.value);

const btn = document.querySelector<HTMLButtonElement>('.btn')!;

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
console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6, 7, 9]));

getRandomElement(['a', 'n']); // inferred Generic

function merge<T extends object, U extends object>(object1: T, object2: U) {
	return {
		...object1,
		...object2,
	};
}

const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });

// console.log(merge({ name: 'colt' }, { num: 9 }));

// merge<{ name: string }, { pets: string[] }>(
// 	{ name: 'colt' },
// 	{ pets: ['blue', 'elton'] }
// );


interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// console.log(printDoubleLength('asdb'));
// console.log(printDoubleLength(2342354));

function makeEmptyArray<T = number>(): T[] {
  return [];
};

const numbers = makeEmptyArray();
const bools = makeEmptyArray<boolean>();
// console.log(strings);


interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

// class VideoPlaylist {
//   public videos: Video[] = []
// }
// class SongPlaylist {
//   public songs: Song[] = []
// }

class Playlist<T> {
  public queue: T[] = [];

  add(el: T) {
    this.queue.push(el)
  }
}

const songs = new Playlist<Song>();
// songs.add()
const videos = new Playlist<Video>();
// songs.add() 