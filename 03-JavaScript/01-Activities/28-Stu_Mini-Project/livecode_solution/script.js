//establish some persisting data store
var score = {
  win: 0,
  lose: 0,
  tie: 0,
};

var options = ["R", "P", "S"];

var gameMap = {
  R: {
    R: "tie",
    P: "lose",
    S: "win",
  },
  P: {
    R: "win",
    P: "tie",
    S: "lose",
  },
  S: {
    R: "lose",
    P: "win",
    S: "tie",
  },
};

// function for main gameplay
function play() {
  // ask for user input - choose R P or S? store in a var
  var userChoice = prompt("Choose R P or S").toUpperCase();
  //do input validation use Array.includes
  if (options.includes(userChoice)) {
    //keep going
    var computerIndex = Math.floor(Math.random() * 3);
    var computerChoice = options[computerIndex];

    //CONDITIONAL WAY
    // //have both human and comp choices
    // //conditionals
    // if (
    //   (computerChoice === "R" && userChoice === "P") ||
    //   (computerChoice === "P" && userChoice === "S") ||
    //   (computerChoice === "S" && userChoice === "R")
    // ) {
    //   //winning scenario
    //   alert("Computer chose " + computerChoice + " You Win!");
    //   score.win++;
    //   //tie scenario
    // } else if (computerChoice === userChoice) {
    //   alert("Computer chose " + computerChoice + " You Tied!");
    //   score.tie++;
    // } else {
    //   alert("Computer chose " + computerChoice + " You Lose!");
    //   score.lose++;
    // }

    // alert(
    //   "number of wins --- " +
    //     score.win +
    //     "\n" +
    //     "number of losses --- " +
    //     score.lose +
    //     "\n" +
    //     "number of ties --- " +
    //     score.tie
    // );

    //CONDITIONAL WAY

    //Object Map Lookup(Matrix) Way
    var result = gameMap[userChoice][computerChoice];

    alert("Computer chose " + computerChoice + "\n" + "You " + result);
    score[result]++;

    alert(
      "number of wins --- " +
        score.win +
        "\n" +
        "number of losses --- " +
        score.lose +
        "\n" +
        "number of ties --- " +
        score.tie
    );

    //Object Map Lookup(Matrix) Way

    //   var playAgain = confirm("Want to play again?");
    if (confirm("Want to play again?")) {
      play();
    }
  } else {
    //if bad input, return
    alert("Please input only R, P or S!");
    return play();
  }

  //addition
}
play();
// function for main gameplay
