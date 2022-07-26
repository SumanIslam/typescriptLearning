class Player {
  protected _score: number = 0;

  constructor(public first: string, public last: string) {}

  get fullName(): string {
    return `${this.first} ${this.last}`
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if(newScore < 0) {
      throw new Error('Score can not be negative')
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

const elton = new Player("Elton", "Steele");
console.log(elton);

console.log(elton.fullName);
console.log(elton.score);
elton.score  = 23
console.log(elton.score);