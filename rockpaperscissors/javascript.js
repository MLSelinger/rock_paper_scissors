let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let option = choices[Math.floor(Math.random() * choices.length)];
    return option
}
function getPlayerChoice() {
    let playerChoice = prompt("Let's Play Rock, Paper, Scissors.  Please type your choice!")
    playerChoice = playerChoice.toLowerCase();
    return playerChoice
}
let computerSelection = getComputerChoice()
let playerSelection = getPlayerChoice()


function checkWinner() {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if ((playerSelection === "rock" && computerSelection ==="scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")) {
        return "Player"
    }
    else if (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "paper" && computerSelection === "scissors")) {
        return "Computer"
    }
    else {  
        return "Invalid Entry!  Please Try Again!"
    }
}
console.log(computerSelection, playerSelection)
console.log(checkWinner())

