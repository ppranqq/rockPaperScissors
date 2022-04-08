//query buttons and score/points
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const computerMoveBtn = document.getElementById("computer-move");
const playerPoints = document.getElementById("player");
const computerPoints = document.getElementById("computer");

//function that returns computer move(rock, paper or scissors)
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

//points counter

let cPoints = 0;
let pPoints = 0;

//onclicks

const clickMoveHandler = (MOVE_BTN) => {
  computerMoveBtn.innerHTML = "...";
  setTimeout(() => {
    const move = computerMove();
    computerMoveBtn.innerHTML = `${move}`;
    //if player move is rock
    MOVE_BTN === "ROCK"
      ? move === "Rock"
        ? null
        : move === "Paper"
        ? (cPoints += 1)
        : (pPoints += 1)
      : //if player move is paper
      MOVE_BTN === "PAPER"
      ? move === "Rock"
        ? (pPoints += 1)
        : move === "Paper"
        ? null
        : (cPoints += 1)
      : //if player move is scissors
        MOVE_BTN ===
        "SCISSORS"(
          move === "Rock"
            ? (cPoints += 1)
            : move === "Paper"
            ? (pPoints += 1)
            : null
        );
    playerPoints.innerHTML = pPoints;
    computerPoints.innerHTML = cPoints;
  }, 500);
};

rockBtn.onclick = () => {
  const MOVE_BTN = "ROCK";
  clickMoveHandler(MOVE_BTN);
};

rockBtn.onclick = () => {
  const MOVE_BTN = "ROCK";
  clickMoveHandler(MOVE_BTN);
};

rockBtn.onclick = () => {
  const MOVE_BTN = "ROCK";
  clickMoveHandler(MOVE_BTN);
};
