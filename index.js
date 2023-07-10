// Query Selectors
const newGame = document.querySelector('#newgameBtn');
const startContainer = document.querySelector('#startContainer');
const container = document.querySelector('#container');
const choiceContainer = document.querySelector('#choiceContainer');
const resetDiv = document.querySelector('#resetDiv');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#resetBtn');
let roundResultsText = document.querySelector('#roundResults');
let roundCounterText = document.querySelector('#counter');
let playerScoreText = document.querySelector('#player');
let computerScoreText = document.querySelector('#computer');
let tieScoreText = document.querySelector('#tie');

// Initializers
container.style.display = 'none';
choiceContainer.style.display = 'none';
resetDiv.style.display = 'none';

const computerSelection = getComputerChoice();
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundResults = '';


// Event listeners
newGame.addEventListener('click', startGame);
rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);
resetBtn.addEventListener('click', resetGame);

// Starts the game
function startGame() {
  startContainer.style.display = 'none';
  container.style.display = 'flex';
  choiceContainer.style.display = 'flex';
  resetDiv.style.display = 'flex';
};

// Computers move 
function getComputerChoice() {
  const compChoice = ['rock', 'paper', 'scissors'];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
};

// Starts the round, gets the players choice, and a random computers choice, and declares the winner of the round.
function playRound(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  
  if ((playerSelection === 'rock' && computerSelection === 'rock') ||
  (playerSelection === 'paper' && computerSelection === 'paper') ||
  (playerSelection === 'scissors' && computerSelection === 'scissors')) {
    roundResultsText.innerHTML = `You choose: ${playerSelection} <br> 
    Computer chooses: ${computerSelection} <br> Its a tie! Choose again!`;
    tieScore++;
    tieScoreText.textContent = 'Tie points: ' + tieScore;

  } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
  (playerSelection === 'paper' && computerSelection === 'scissors') ||
  (playerSelection === 'scissors' && computerSelection === 'rock')) {
    roundResultsText.innerHTML = `You choose: ${playerSelection} <br> 
    Computer chooses: ${computerSelection} <br> Computer wins the round! Choose again!`;
    computerScore++;
    computerScoreText.textContent = 'Computer points: ' + computerScore;

  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
  (playerSelection === 'paper' && computerSelection === 'rock') ||
  (playerSelection === 'scissors' && computerSelection === 'paper')) {
    roundResultsText.innerHTML = `You choose: ${playerSelection} <br> 
    Computer chooses: ${computerSelection} <br> You win the round! Choose again!`;
    playerScore++;
    playerScoreText.textContent = 'Player points: ' + playerScore;
  };

  roundCounter++;
  roundCounterText.textContent = 'Round: ' + roundCounter;
  if (playerScore === 5 || computerScore === 5 || tieScore === 5) {
    declareWinner();
  };
};

// Winner outcome
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

