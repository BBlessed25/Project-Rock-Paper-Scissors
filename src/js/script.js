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
    game.draws++;
    return "It's a draw!";
  }

  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (winConditions[playerChoice] === computerChoice) {
    game.wins++;
    return "You win!";
  } else {
    game.losses++;
    return "You lose!";
  }
}
// Main loop
while (true) {
  console.log("\n=== Rock-Paper-Scissors Game ===");
  const playerInput = prompt("Enter rock, paper, or scissors (or 'q' to quit): ").toLowerCase();

  if (playerInput === 'q') {
    console.log("\nGame Over. Thanks for playing!");
    console.log(`Final Score → Wins: ${game.wins}, Losses: ${game.losses}, Draws: ${game.draws}`);
    break;
  }

  if (!choices.includes(playerInput)) {
    console.log("❌ Invalid input. Try again.");
    continue;
  }

  const computerChoice = getComputerChoice();
  const result = playRound(playerInput, computerChoice);

  console.log(`\nYou chose: ${playerInput}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(`${result}`);
  console.log(`Current Score → Wins: ${game.wins}, Losses: ${game.losses}, Draws: ${game.draws}`);
}