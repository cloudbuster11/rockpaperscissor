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

// A round of play
// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === "ROCK" && computerSelection === 2) {
//     scorePlayer++;
//     return "You Win! Rock beats Scissors!";
//   } else if (playerSelection === "ROCK" && computerSelection === 1) {
//     scoreComputer++;
//     return "You loose. Paper beats rock.";
//   } else if (playerSelection === "ROCK" && computerSelection === 0) {
//     return "It´s a draw!";
//   } else if (playerSelection === "PAPER" && computerSelection === 2) {
//     scoreComputer++;
//     return "You loose! Paper beats scissor!";
//   } else if (playerSelection === "PAPER" && computerSelection === 1) {
//     return "It´s a draw!";
//   } else if (playerSelection === "PAPER" && computerSelection === 0) {
//     scorePlayer++;
//     return "You win! Paper beats rock!";
//   } else if (playerSelection === "SCISSOR" && computerSelection === 2) {
//     return "It´s a draw!";
//   } else if (playerSelection === "SCISSOR" && computerSelection === 1) {
//     scorePlayer++;
//     return "You win! Scissor beats paper!";
//   } else if (playerSelection === "SCISSOR" && computerSelection === 0) {
//     scoreComputer++;
//     return "You lose! Rock beats scissor!";
//   }
// }

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
