
const computerSelection = getComputerChoice();
const playerSelection = "Player";
let result = "";


// Getting a random choice for the computers turn.
function getComputerChoice() {
  let compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

  

// Starts the round and checking each statement to define a winner.
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Please choose between: \"Rock\" \"Paper\" \"Scissors\"").toUpperCase().toLowerCase();
  computerSelection = getComputerChoice();
  console.log("Computer gets: " + " " + computerSelection + "\n" + "Player throws: " + " " + playerSelection);
  
  if ((playerSelection === "rock" && computerSelection === "rock") ||
  (playerSelection === "paper" && computerSelection === "paper") ||
  (playerSelection === "scissors" && computerSelection === "scissors")) {
    return  result = "";

  } else if ((playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")) {
    return `${result = "Computer wins!"}`;

  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")) {
    return `${result = "Player wins!"}`;
  } else {
    return result = "Invalid choice";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  while (playerScore <= 4 || computerScore <= 4) {
    playRound(playerSelection, computerSelection);
    if (result === "Computer wins!") {
      computerScore++;
      console.log(`${result} Score: ${computerScore}`);
    } else if (result === "Player wins!") {
      playerScore++;
      console.log(`${result} Score: ${playerScore}`);
    } else if (result === "") {
      console.log(`${result} Its a tie!\n Player's score: ${playerScore}\n Computer's score: ${computerScore}`);
    } 
  }
  return false;
}



console.log(playRound(playerSelection, computerSelection));
game();

