let choiches = ["Rock", "Paper", "Scissor"];
let scorePlayer = 0;
let scoreComputer = 0;

// Random Computer Choiche
function getComputerChoice() {
  return Math.floor(Math.random() * choiches.length);
}

// A round of play
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === 2) {
    scorePlayer++;
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection === "ROCK" && computerSelection === 1) {
    scoreComputer++;
    return "You loose. Paper beats rock.";
  } else if (playerSelection === "ROCK" && computerSelection === 0) {
    return "It´s a draw!";
  } else if (playerSelection === "PAPER" && computerSelection === 2) {
    scoreComputer++;
    return "You loose! Paper beats scissor!";
  } else if (playerSelection === "PAPER" && computerSelection === 1) {
    return "It´s a draw!";
  } else if (playerSelection === "PAPER" && computerSelection === 0) {
    scorePlayer++;
    return "You win! Paper beats rock!";
  } else if (playerSelection === "SCISSOR" && computerSelection === 2) {
    return "It´s a draw!";
  } else if (playerSelection === "SCISSOR" && computerSelection === 1) {
    scorePlayer++;
    return "You win! Scissor beats paper!";
  } else if (playerSelection === "SCISSOR" && computerSelection === 0) {
    scoreComputer++;
    return "You lose! Rock beats scissor!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(
      'Please choose between "Rock, Paper or Scissor'
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
      `You won! Your score was ${scorePlayer} computers score was ${scoreComputer}.`
    );
  } else {
    console.log(
      `You lost! Your score was ${scorePlayer} and the computers score was ${scoreComputer}.`
    );
  }
}

game();
