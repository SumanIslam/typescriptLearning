class Player {
  static description = 'Player in our game';
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg")
  }
  get fullName() {
    return `${this.first} ${this.last}`
  }
  getScore() {
    return this.#score;
  }
  set score(newScore) {
    if(newScore < 0) {
      throw new Error("Score Must be positive");
    }
    this.#score = newScore;
  }
  updateScore(newScore) {
    return this.#score = newScore;
  }
  taunt() {
    console.log("BooYah");
  }
  loseLife() {
    this.numLives -= 1;
  }
}

class AdminPlayer extends Player {
  isAdmin = true;
}

const admin = new AdminPlayer();
console.log(admin);

const player1 = new Player("Suman", "Islam");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(Player.description);
// console.log(Player.randomPlayer());
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.getScore());
// player1.score = 23;
// console.log(player1.getScore());
// console.log(player1.fullName);

// const player2 = new Player("Charlie", "brown");
// player2.taunt();
// console.log(player2.first);
// console.log(player2.last);
