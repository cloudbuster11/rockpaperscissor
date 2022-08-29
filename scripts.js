let choiches = ["Rock", "Paper", "Scissor"];
let scorePlayer = 0;
let scoreComputer = 0;
let playerChoice;
let computerChoice;
const roundText = document.querySelector("#roundText");
const resultText = document.querySelector("#resultText");
const currentScore = document.querySelector("#currentScore");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    console.log(playerChoice);

    getComputerChoice();
    console.log(computerChoice);

    game();
  });
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
    return;
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
    return;
  } else if (randomNumber === 3) {
    computerChoice = "Scissor";
    return;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerChoice === "rock" && computerChoice === "Scissor") {
    scorePlayer++;
    roundText.textContent = `You Win! ${playerChoice} beats ${computerChoice} !`;
    return;
  } else if (playerChoice === "paper" && computerChoice === "Rock") {
    scorePlayer++;
    roundText.textContent = `You Win! ${playerChoice} beats ${computerChoice} !`;
    return;
  } else if (playerChoice === "scissor" && computerChoice === "Paper") {
    scorePlayer++;
    roundText.textContent = `You Win! ${playerChoice} beats ${computerChoice} !`;
    return;
  } else if (playerChoice === computerChoice) {
    return "It´s draw!";
  } else {
    scoreComputer++;
    roundText.textContent = `You lost! ${computerChoice} beats ${playerChoice} !`;
    return;
  }
}

function game() {
  playRound(playerChoice, computerChoice);
  currentScore.textContent = `Your score ${scorePlayer}. Computers score: ${scoreComputer}`;
  // Call check winner function
  checkWinner();
}

function checkWinner() {
  if (scorePlayer === 5) {
    resultText.textContent = `You won the game! Your score was ${scorePlayer} computers score was ${scoreComputer}.`;
  } else if (scoreComputer === 5) {
    resultText.textContent = `You lost the game! Your score was ${scorePlayer} and the computers score was ${scoreComputer}.`;
  }
}
