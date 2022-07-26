class Player {
  private score: number = 0;

  constructor(public first: string, public last: string) {}
}

const elton = new Player("Elton", "Steele");
console.log(elton);

// elton.score