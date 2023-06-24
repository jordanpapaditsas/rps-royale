// Initializing variables
const computerSelection = getComputerChoice();
const playerSelection = "Player";
let result;

// Getting a random choice for the computers turn.
function getComputerChoice() {
  const compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

// Receives input from the user, comparing the value with the computers value, and determines the winner.
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt(
    "Please choose between: \"Rock\" \"Paper\" \"Scissors\"").toUpperCase().toLowerCase();
  computerSelection = getComputerChoice();
  
  console.log("Computer gets: " + " " + computerSelection + "\n" 
  + "Player throws: " + " " + playerSelection);
  
  if ((playerSelection === "rock" && computerSelection === "rock") ||
  (playerSelection === "paper" && computerSelection === "paper") ||
  (playerSelection === "scissors" && computerSelection === "scissors")) {
    return  `${result = "It's a tie!"}`;

  } else if ((playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")) {
    return `${result = "Computer wins the round!"}`;

  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")) {
    return `${result = "Player wins the round!"}`;
  } else {
    return console.log(result = "Invalid choice");
  }
}

// Loops till the player or the computer scores 5 wins. Keeps track of the score.
function startGame() {
  let playerScore = 0;
  let computerScore = 0;
  const player = "Player";
  const computer = "Computer";
  
  while (playerScore <= 4 && computerScore <= 4) {
    playRound(playerSelection, computerSelection);
    if (result === "Computer wins the round!") {
      computerScore++;
      console.log(`${result} Score: ${computerScore}`);
    } else if (result === "Player wins the round!") {
      playerScore++;
      console.log(`${result} Score: ${playerScore}`);
    } else if (result === "It's a tie!") {
      console.log(`${result}`);
    } 
  }
  if (playerScore === 5 && computerScore < 5) {
    console.log(`Match is over, ${player} won! 
    Player's score: ${playerScore}\n    Computer's score: ${computerScore}`);
  } else if (computerScore === 5 && playerScore < 5) {
    console.log(`Match is over, ${computer} won!
    Player's score: ${playerScore}\n    Computer's score: ${computerScore}`);
  }
}

// Calling function to start the game.
startGame();



