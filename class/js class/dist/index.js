class Player {
  score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log("BooYah");
  }
  loseLife() {
    this.numLives -= 1;
  }
}


const player1 = new Player("Suman", "Islam");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);

// const player2 = new Player("Charlie", "brown");
// player2.taunt();
// console.log(player2.first);
// console.log(player2.last);