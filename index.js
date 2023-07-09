// Initializing variables
const computerSelection = getComputerChoice();

let scoreCounter = 0;
let playerScore = 0;
let computerScore = 0;



/**
 *  Selection of elements
 */





/**
 *  Event listeners
 */




// Getting a random choice for the computers turn.
function getComputerChoice() {
  const compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

// Receives input from the user, comparing the value with the computers value, and determines the winner.
function playRound(event) {
  const playerSelection = event.target.id;

  const computerSelection = getComputerChoice();
  
  if ((playerSelection === 'rock' && computerSelection === "rock") ||
  (playerSelection === 'paper' && computerSelection === "paper") ||
  (playerSelection === 'scissors' && computerSelection === "scissors")) {
    fightRoundResults.textContent = 'It\'s a tie';
    checkRoundResults();

  } else if ((playerSelection === 'rock' && computerSelection === "paper") ||
  (playerSelection === 'paper' && computerSelection === "scissors") ||
  (playerSelection === 'scissors' && computerSelection === "rock")) {
    fightRoundResults.textContent = 'Computer wins the round!';
    checkRoundResults();

  } else if ((playerSelection === 'rock' && computerSelection === "scissors") ||
  (playerSelection === 'paper' && computerSelection === "rock") ||
  (playerSelection === 'scissors' && computerSelection === "paper")) {
    fightRoundResults.textContent = 'Player wins the round!';
    checkRoundResults();
  }
};


function checkRoundResults() {
  if (fightRoundResults.textContent === 'It\'s a tie') {
      scoreCounter++;
      playerScore += 0;
      computerScore += 0;
  }
  if (fightRoundResults.textContent === 'Computer wins the round!') {
      scoreCounter++;
      computerScore++;
  }
  if (fightRoundResults.textContent === 'Player wins the round!') {
      scoreCounter++
      playerScore++;
  }
}


// Resets the game









