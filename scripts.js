let choiches = ["Rock", "Paper", "Scissor"];
let scorePlayer = 0;
let scoreComputer = 0;
let playerChoice;
let computerChoice;
const roundText = document.querySelector("#roundText");
const resultText = document.querySelector("#resultText");
const currentScore = document.querySelector("#currentScore");

let scorePlayerDom = document.querySelector("#playerScore");
let scoreComputerDom = document.querySelector("#computerScore");

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
    computerChoice = "rock";
    return;
  } else if (randomNumber === 2) {
    computerChoice = "paper";
    return;
  } else if (randomNumber === 3) {
    computerChoice = "scissor";
    return;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerChoice === "rock" && computerChoice === "scissor") {
    scorePlayer++;
    roundText.textContent = `You Win! ${playerChoice} beats ${computerChoice} !`;
    return;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    scorePlayer++;
    roundText.textContent = `You Win! ${playerChoice} beats ${computerChoice} !`;
    return;
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    scorePlayer++;
    roundText.textContent = `You Win! ${playerChoice} beats ${computerChoice} !`;
    return;
  } else if (playerChoice === computerChoice) {
    roundText.textContent = "It´s draw!";
    return;
  } else {
    scoreComputer++;
    roundText.textContent = `You lost! ${computerChoice} beats ${playerChoice} !`;
    return;
  }
}

function game() {
  playRound(playerChoice, computerChoice);
  scorePlayerDom.textContent = `${scorePlayer}`;
  scoreComputerDom.textContent = `${scoreComputer}`;
  // Call check winner function
  checkWinner();
}

function checkWinner() {
  if (scorePlayer === 5) {
    resultText.textContent = `You won the game! Your score was ${scorePlayer} computers score was ${scoreComputer}.`;
    document.getElementById("rock").style.display = "none";
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissor").style.display = "none";
  } else if (scoreComputer === 5) {
    resultText.textContent = `You lost the game! Your score was ${scorePlayer} and the computers score was ${scoreComputer}.`;
    document.getElementById("rock").style.display = "none";
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissor").style.display = "none";
  }
}
