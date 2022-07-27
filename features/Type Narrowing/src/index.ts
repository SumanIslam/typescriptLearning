function triple(value: number | string): number | string {
	if (typeof value === 'string') {
		return value.repeat(3);
	}
	return value * 3;
}

triple(9);

const el = document.getElementById('idk');

if(el) {
  el
} else {
  el
}

const printLetters = (word?: string) => {
  if(word) {
    for (const char of word) {
      console.log(char);
    }
  } else {
    console.log("You did not pass a word.");
    
  }
}

printLetters("SUMAN")

function someDemo(x: string | number, y: string | boolean) {
  if(x === y) {
    console.log(x.toUpperCase());
  }
}

someDemo("x", "x");