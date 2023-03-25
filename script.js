function getComputerChoice() {
    let compChoiceNum = Math.random() * 100;
    if (compChoiceNum < 33) {
        let compChoice = "ROCK";
        return compChoice;
    }
    else if (compChoiceNum < 66) {
        let compChoice = "PAPER";
        return compChoice;
    }
    else {
        let compChoice = "SCISSORS";
        return compChoice;
    }
}

function getPlayerChoice() {
    let playerChoiceOG = prompt("Rock, Paper, Scissors!");
    let playerChoice = playerChoiceOG.toUpperCase();
    if (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS" ) {
        console.log("Invalid option")
    }
    else {
        return playerChoice;
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection)); 


function playRound(player, computer) {  
    if (player === computer) {
        return "Draw!";
    }
    else {
        switch (player) {
            case "ROCK":
            if (computer === "PAPER") {
                return "You Lose! Paper Beats Rock";
                losses = losses + 1;
            }
            else {
                return "You Win! Rock Beats Scissors";
                wins = wins + 1;
            }
            break;
            case "PAPER":
            if (computer === "SCISSORS") {
                return "You Lose! Scissors Beats Paper";
                losses = losses + 1;
            }
            else {
                return "You Win! Paper Beats Rock";
                wins = wins + 1;
            }
            break;
            case "SCISSORS":
            if (computer === "ROCK") {
                return "You Lose! Rock Beats Scissors";
                losses = losses + 1;
            }
            else {
                return "You Win! Scissors Beats Paper";
                wins = wins + 1;
            }
            break;
        }
    }
}
