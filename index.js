// Initializing variables
const computerSelection = getComputerChoice();
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundResults = '';

/**
 *  Selection of elements
 */
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#resetBtn');
let roundResultsText = document.querySelector('#roundResults');
let roundCounterText = document.querySelector('#counter');
let playerScoreText = document.querySelector('#player');
let computerScoreText = document.querySelector('#computer');
let tieScoreText = document.querySelector('#tie');

/**
 *  Event listeners
 */
rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);
resetBtn.addEventListener('click', resetGame);

// Getting a random choice for the computers turn.
function getComputerChoice() {
  const compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

// Starts the round, gets the players choice, and a random computers choice, and declares the winner of the round.
function playRound(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  
  if ((playerSelection === 'rock' && computerSelection === "rock") ||
  (playerSelection === 'paper' && computerSelection === "paper") ||
  (playerSelection === 'scissors' && computerSelection === "scissors")) {
    roundResultsText.innerHTML = `You choose: ${playerSelection} <br> 
    Computer chooses: ${computerSelection} <br> Its a tie!`;
    tieScore++;
    tieScoreText.textContent = 'Tie: ' + tieScore;

  } else if ((playerSelection === 'rock' && computerSelection === "paper") ||
  (playerSelection === 'paper' && computerSelection === "scissors") ||
  (playerSelection === 'scissors' && computerSelection === "rock")) {
    roundResultsText.innerHTML = `You choose: ${playerSelection} <br> 
    Computer chooses: ${computerSelection} <br> Computer wins the round!`;
    computerScore++;
    computerScoreText.textContent = 'Computer: ' + computerScore;

  } else if ((playerSelection === 'rock' && computerSelection === "scissors") ||
  (playerSelection === 'paper' && computerSelection === "rock") ||
  (playerSelection === 'scissors' && computerSelection === "paper")) {
    roundResultsText.innerHTML = `You choose: ${playerSelection} <br> 
    Computer chooses: ${computerSelection} <br> You win the round!`;
    playerScore++;
    playerScoreText.textContent = 'Player: ' + playerScore;
  };

  roundCounter++;
  roundCounterText.textContent = 'Round: ' + roundCounter;
  if (playerScore === 5 || computerScore === 5 || tieScore === 5) {
    declareWinner();
  };
};

/**
 *  Checks who wins the game, and provides the decision message.
 */
function declareWinner() {
  if (playerScore === 5) {
    roundResultsText.innerHTML = 'You won the game!';
  };
  if (computerScore === 5) {
    roundResultsText.innerHTML = 'Computer won the game!';
    
  };
  if (tieScore === 5) {
    roundResultsText.innerHTML = 'Its a draw!';
  };
};

// Resets the game
function resetGame() {
  roundCounter = 1;
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;

  roundCounterText.textContent = 'Round: ' + roundCounter;
  playerScoreText.textContent = 'Player: ' + playerScore;
  computerScoreText.textContent = 'Computer: ' + computerScore;
  tieScoreText.textContent = 'Tie: ' + tieScore;
  roundResultsText.innerHTML = roundResults;
};





