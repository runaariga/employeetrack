class Letter {
  constructor(letter) {
    //do some kind of check to see if is letter or num and set visible prop
    this.visible = /[^a-z0-9]/gi.test(letter);
    this.char = letter;
  }
  guess(l) {
    //check to see if l = the letter
    this.visible = this.visible
      ? this.visible
      : l.toLowerCase() === this.char.toLowerCase();
    return l.toLowerCase() === this.char.toLowerCase();
  }

  toString() {
    return this.visible ? this.char : "_";
  }

  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
