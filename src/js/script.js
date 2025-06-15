const prompt = require('prompt-sync')();
// valid options
const choices = ['rock', 'paper', 'scissors'];

let game = {
  wins: 0,
  losses: 0,
  draws: 0,
};

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
      return "draw";
  }

  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winConditions[playerChoice] === computerChoice ? "player" : "computer";
}

// Main loop
while (true) {
  console.log("\n=== Rock-Paper-Scissors Game ===");
  const playerInput = prompt("Enter rock, paper, or scissors (or 'q' to quit): ").toLowerCase();

  let playerChoice = prompt('Choose rock, paper, or scissors: ').toLowerCase();

  if (!choices.includes(playerChoice)) {
      console.log("Invalid choice. Round skipped.");
      continue;
  }

  let computerChoice = getComputerChoice();

  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  let result = playRound(playerChoice, computerChoice);

  if (result === "player") {
      console.log("You win this round!");
      score.player++;
  } else if (result === "computer") {
      console.log("Computer wins this round!");
      score.computer++;
  } else {
      console.log("This round is a draw!");
  }

  console.log(`Current Score — You: ${score.player}, Computer: ${score.computer}`);
}

console.log(`\n--- Game Over ---`);
console.log(`Final Score — You: ${score.player}, Computer: ${score.computer}`);

if (score.player > score.computer) {
  console.log(" You are the overall winner!");
} else if (score.computer > score.player) {
  console.log(" Computer wins the game.");
} else {
  console.log("The game is a draw!");
}