//query buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const computerMoveBtn = document.getElementById("computer-move");
const playerPoints = document.getElementById("player");
const computerPoints = document.getElementById("computer");

const computerMove = () => {
  //random computer choice
  const computerMoveNumber = () => Math.floor(Math.random() * 3 + 1);

  const computerMoveHandler = (computerMoveNumber) => {
    if (computerMoveNumber === 1) {
      return "Rock";
    } else if (computerMoveNumber === 2) {
      return "Paper";
    } else if (computerMoveNumber === 3) {
      return "Scissors";
    }
  };
  return computerMoveHandler(computerMoveNumber());
};

rockBtn.onclick = () => {
  const move = computerMove();
  //changing html element/computer move DOM
  computerMoveBtn.innerHTML = `${move}`;

  let cPoints = 0;

  if (move === "Rock") {
    cPoints = 0.5;
  } else if (move === "Paper") {
    cPoints = 0;
  } else if (move === "Scissors") {
    cPoints = 1;
  }
  // zbrojiti bodove ***
  let sumPoints = cPoints;

  computerPoints.innerHTML = `${sumPoints}`;
};

paperBtn.onclick = () => {
  const move = computerMove();

  //changing html element/computer move DOM
  computerMoveBtn.innerHTML = `${move}`;

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
  const move = computerMove();

  //changing html element/computer move DOM
  computerMoveBtn.innerHTML = `${move}`;

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
