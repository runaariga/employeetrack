const Letter = require("./Letter");

class Word {
  constructor(word) {
    //turn word into an array of single letters
    this.letters = [...word].map((l) => new Letter(l)); // word.split("")
  }

  guessLetter(letter) {
    let found = false;
    this.letters.forEach((l) => {
      if (l.guess(letter)) {
        found = true;
      }
    });
    // return this.letters.some((l) => l.guess(letter));
    return found;
  }
  guessedCorrectly() {
    //return if every letter in word is visible
    // console.log(this.letters);
    return this.letters.every((l) => l.visible);
  }
  toString() {
    return this.letters.map((l) => l.toString()).join("");
  }
}

module.exports = Word;
