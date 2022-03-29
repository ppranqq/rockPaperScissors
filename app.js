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

//onclicks have same logic

rockBtn.onclick = () => {
  computerMoveBtn.innerHTML = "...";
  setTimeout(() => {
    const move = computerMove();
    computerMoveBtn.innerHTML = `${move}`;

    if (move === "Rock") {
      cPoints += 0.5;
      pPoints += 0.5;
    } else if (move === "Paper") {
      cPoints += 1;
    } else if (move === "Scissors") {
      pPoints += 1;
    }
    playerPoints.innerHTML = pPoints;
    computerPoints.innerHTML = cPoints;
  }, 500);
};

paperBtn.onclick = () => {
  computerMoveBtn.innerHTML = "...";
  setTimeout(() => {
    const move = computerMove();
    computerMoveBtn.innerHTML = `${move}`;

    if (move === "Rock") {
      pPoints += 1;
    } else if (move === "Paper") {
      cPoints += 0.5;
      pPoints += 0.5;
    } else if (move === "Scissors") {
      cPoints += 1;
    }
    playerPoints.innerHTML = pPoints;
    computerPoints.innerHTML = cPoints;
  }, 500);
};

scissorsBtn.onclick = () => {
  computerMoveBtn.innerHTML = "...";
  setTimeout(() => {
    const move = computerMove();
    computerMoveBtn.innerHTML = `${move}`;

    if (move === "Rock") {
      cPoints += 1;
    } else if (move === "Paper") {
      pPoints += 1;
    } else if (move === "Scissors") {
      cPoints += 0.5;
      pPoints += 0.5;
    }
    playerPoints.innerHTML = pPoints;
    computerPoints.innerHTML = cPoints;
  }, 500);
};
