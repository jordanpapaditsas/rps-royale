// Getting a random choice for the computers turn.
function getComputerChoice() {
  let compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

// Starts the round and checking each statement to define a winner.
function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "rock" && computerSelection === "rock") ||
  (playerSelection === "paper" && computerSelection === "paper") ||
  (playerSelection === "scissors" && computerSelection === "scissors")) {
    return "It's a Tie!";

  } else if ((playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")) {
    return "Player loses, Computer wins!";

  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")) {
    return "Player wins, Computer loses!";
  }
}

// Prompts user to choose an option.
const playerSelection = prompt("Please choose between: \"Rock \"Paper \"Scissors").toUpperCase().toLowerCase();
const computerSelection = getComputerChoice();

console.log("Computer gets: " + " " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

