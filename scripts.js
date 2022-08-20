let choiches = ["Rock", "Paper", "Scissor"];
let scorePlayer = 0;
let scoreComputer = 0;

// Random Computer Choiche
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else if (randomNumber === 3) {
    return "Scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === "Scissor") {
    scorePlayer++;
    return `You Win! ${playerSelection} beats ${computerSelection} !`;
  } else if (playerSelection === "PAPER" && computerSelection === "Rock") {
    scorePlayer++;
    return `You Win! ${playerSelection} beats ${computerSelection} !`;
  } else if (playerSelection === "SCISSOR" && computerSelection === "Paper") {
    scorePlayer++;
    return `You Win! ${playerSelection} beats ${computerSelection} !`;
  } else if (playerSelection === computerSelection) {
    return "It´s draw!";
  } else {
    scoreComputer++;
    return `You lost! ${computerSelection} beats ${playerSelection} !`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(
      'Please choose between "Rock, Paper or Scissor":'
    ).toUpperCase();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your score ${scorePlayer}. Computers score: ${scoreComputer}`);
  }
  //Call check winner function
  checkWinner();
}

function checkWinner() {
  if (scorePlayer > scoreComputer) {
    console.log(
      `You won the game! Your score was ${scorePlayer} computers score was ${scoreComputer}.`
    );
  } else {
    console.log(
      `You lost the game! Your score was ${scorePlayer} and the computers score was ${scoreComputer}.`
    );
  }
}

game();
