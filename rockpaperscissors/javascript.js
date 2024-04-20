let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let option = choices[Math.floor(Math.random() * choices.length)];
    return option
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
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
        return "Null"
    }
}


function playRound(playerSelection, computerSelection) {
    let result = checkWinner(playerSelection, computerSelection);
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let computer = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    if (result === "Tie"){
        return `Tie game! You both selected ${player}!`
    }
    else if (result === "Player") {
        return `You Win! ${player} beats ${computer}`
    }
    else if (result === "Computer") {
        return `Computer Wins! ${computer} beats ${player}`
    }
    else {  
        return "Invalid Entry!  Please Try Again!"
    }
}
function getPlayerChoice() {
    let playerChoice = prompt("Let's Play Rock, Paper, Scissors.  Please type your choice!")
    playerChoice = playerChoice.toLowerCase();
    return playerChoice
}

function game() {
    let player = 0;
    let computer = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
   
        if (checkWinner(playerSelection, computerSelection) === "Tie") {
            tie++;
    } 
        else if (checkWinner(playerSelection, computerSelection ) === "Player") {
            player++;
        }
        else if (checkWinner(playerSelection, computerSelection) === "Computer") {
            computer++;
        }
        else {
            i--;
        }
        console.log(`${player}-${computer}-${tie}`);
    }
        console.log("Game Over")
        if (player > computer) {
             console.log("You Win! Rematch??");
             return "player";
            }
        else if(player < computer) {
            console.log("You Lose! Would you like to try again??");
            return "computer";
        }
        else if (player === computer) {
            console.log("We Tied!  Let's Play Again!")
            return "tie";
        }
    
}


function playMatch() {
        let matchPlayer = 0;
        let matchComputer = 0;
        let matchTie = 0;    
    for (let i = 0; i < 100 ; i++ ){ 
        let match = game()
        if (match === "tie") {
        matchTie++;
    } 
    else if (match === "player") {
        matchPlayer++;
    }
    else {
        matchComputer++;
    }

        if(matchPlayer === 10) {
            console.log("You're the first to 10 wins! Congrats!");
            break;
            }
        else if(matchComputer === 10) {
            console.log("I got to 10 wins first!  Better Luck Next Time!");
            break;
        }
   
    console.log(`You've won ${matchPlayer} matches, Computer has won ${matchComputer} matches, and we've tie ${matchTie} matches!`);
}  
}

playMatch()
