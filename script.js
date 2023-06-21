function getComputerChoice() {

  let compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Please choose between: \"Rock \"Paper \"Scissors").toUpperCase();
console.log("Computer gets: " + " " + getComputerChoice());


function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === 0) {
    console.log("Its a tie!");
  }
}

console.log(playRound(playerSelection, computerSelection));

