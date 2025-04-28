let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgg = document.querySelector("#msg");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("game was draw");
  msgg.innerText = "Game  Was Draw";
  msgg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You Win!");
    msgg.innerText = `You WIN! Your ${userChoice} beats ${compChoice} `;
    msgg.style.backgroundColor = "green";
  } else {
    console.log("You Loss");
    msgg.innerText = `You LOSS ${compChoice} beats Your ${userChoice} `;
    msgg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  const compChoice = genCompChoice();
  console.log("comp Choice", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
