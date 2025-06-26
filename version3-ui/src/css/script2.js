let round = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return 'Draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) return 'Player';
  return 'Computer';
}

function playGame(playerChoice) {
  if (round >= 5) return;

  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  if (result === 'Player') playerScore++;
  else if (result === 'Computer') computerScore++;

  round++;

  document.getElementById('computer-choice').textContent = computerChoice;
  document.getElementById('round-result').textContent = result;

  const table = document.getElementById('score-table');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${round}</td>
    <td>${playerChoice}</td>
    <td>${computerChoice}</td>
    <td>${result}</td>
    <td>${playerScore} - ${computerScore}</td>
  `;
  table.appendChild(row);

  if (round === 5) {
    const finalMsg = document.getElementById('motivation');
    if (playerScore > computerScore) {
      finalMsg.textContent = '🎉 You are the overall winner!';
    } else if (playerScore < computerScore) {
      finalMsg.textContent = '💻 Computer wins the game!';
    } else {
      finalMsg.textContent = '🤝 It\'s a tie!';
    }
  }
}

function resetGame() {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  document.getElementById('score-table').innerHTML = '';
  document.getElementById('computer-choice').textContent = '-';
  document.getElementById('round-result').textContent = '-';
  document.getElementById('motivation').textContent = 'Make your move! First to 5 rounds wins.';
}