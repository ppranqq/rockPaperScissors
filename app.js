//query buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let computerMove = () => {
  //random computer choice
  let computerMoveNumber = () => Math.floor(Math.random() * 3 + 1);

  let computerMoveHandler = (computerMoveNumber) => {
    if (computerMoveNumber === 1) {
      return "Rock";
    } else if (computerMoveNumber === 2) {
      return "Paper";
    } else if (computerMoveNumber === 3) {
      return "Scissors";
    }
    //do i need put "return;" at this line?
  };
  return computerMoveHandler(computerMoveNumber());
};

rockBtn.onclick = () => {
  let move = computerMove();
  if (move === "Rock") {
    return console.log("Your move: Rock\nComputer move: " + move + "\nDRAW.");
  } else if (move === "Paper") {
    return console.log(
      "Your move: Rock\nComputer move: " + move + "\nYou LOST."
    );
  } else if (move === "Scissors") {
    return console.log(
      "Your move: Rock\nComputer move: " + move + "\nYou WIN."
    );
  }
};

paperBtn.onclick = () => {
  let move = computerMove();
  if (move === "Rock") {
    return console.log(
      "Your move: Paper\nComputer move: " + move + "\nYou WIN."
    );
  } else if (move === "Paper") {
    return console.log("Your move: Paper\nComputer move: " + move + "\nDRAW.");
  } else if (move === "Scissors") {
    return console.log(
      "Your move: Paper\nComputer move: " + move + "\nYou LOST."
    );
  }
};

scissorsBtn.onclick = () => {
  let move = computerMove();
  if (move === "Rock") {
    return console.log(
      "Your move: Scissors\nComputer move: " + move + "\nYou LOST."
    );
  } else if (move === "Paper") {
    return console.log(
      "Your move: Scissors\nComputer move: " + move + "\nYou WIN."
    );
  } else if (move === "Scissors") {
    return console.log(
      "Your move: Scissors\nComputer move: " + move + "\nDRAW."
    );
  }
};
