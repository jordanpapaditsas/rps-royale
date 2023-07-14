// Query Selectors
const newGame = document.querySelector('#newgame-btn');
const startContainer = document.querySelector('#start-container');
const container = document.querySelector('#container');
const choiceContainer = document.querySelector('#choice-container');
const resetDiv = document.querySelector('#reset-div');
const body = document.querySelector('body');
const copyright = document.querySelector('#copyright');


const returnHomeBtn = document.querySelector('#home-btn')
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset-btn');
let roundResultsText = document.querySelector('#round-results');
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
returnHomeBtn.addEventListener('click', returnToHome);

// Returns back to home page
function returnToHome() {
 container.style.display = 'none';
 choiceContainer.style.display = 'none';
 resetDiv.style.display = 'none';

 startContainer.style.display = '';
 body.style.backgroundImage = '';
 roundResultsText.style.display = 'none';
 copyright.style.display = 'flex';
};

// Starts the game
function startGame() {
  startContainer.style.display = 'none';
  container.style.display = 'flex';
  choiceContainer.style.display = 'flex';
  resetDiv.style.display = 'flex';
  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  body.style.backgroundImage = 'none';
  copyright.style.display = 'none';



  roundResultsText.style.display = '';
  roundCounter = 1;
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  roundResults = '';

  roundCounterText.innerHTML = '<b>Round:<b> ' + roundCounter;
  playerScoreText.textContent = 'Player points: ' + playerScore;
  computerScoreText.textContent = 'Computer points: ' + computerScore;
  tieScoreText.textContent = 'Tie points: ' + tieScore;
  roundResultsText.innerHTML = roundResults;
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
  roundCounterText.innerHTML = '<b>Round:</b> ' + roundCounter;
  if (playerScore === 5 || computerScore === 5 || tieScore === 5) {
    declareGameWinner();
  };
};

// Declares a game winner at 5 points
function declareGameWinner() {
  let winner = '';
  if (playerScore === 5) {
    winner = 'You won the game!';
  } else if (computerScore === 5) {
    winner = 'Computer demolished you!';
  } else if (tieScore === 5) {
    winner = 'Its a draw!';
  }

  roundResultsText.innerHTML = `The match is over, ${winner}`;

  roundCounter = 1;
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;

  roundCounterText.innerHTML = '<b>Round:<b> ' + roundCounter;
  playerScoreText.textContent = 'Player points: ' + playerScore;
  computerScoreText.textContent = 'Computer points: ' + computerScore;
  tieScoreText.textContent = 'Tie points: ' + tieScore;
};


// Resets the game
function resetGame() {
  roundCounter = 1;
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;

  roundCounterText.innerHTML = '<b>Round:<b> ' + roundCounter;
  playerScoreText.textContent = 'Player points: ' + playerScore;
  computerScoreText.textContent = 'Computer points: ' + computerScore;
  tieScoreText.textContent = 'Tie points: ' + tieScore;
  roundResultsText.innerHTML = roundResults;
};

