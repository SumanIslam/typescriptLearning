class Player {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log("BooYah");
  }
}


const player1 = new Player("Suman", "Islam");
player1.taunt();
console.log(player1.first);
console.log(player1.last);

const player2 = new Player("Charlie", "brown");
player2.taunt();
console.log(player2.first);
console.log(player2.last);