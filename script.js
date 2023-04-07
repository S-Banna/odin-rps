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
        playerChoice = "Invalid option; round will not be counted. (check spelling)"
        return playerChoice;
    }
    else {
        return playerChoice;
    }
}

let rock = document.querySelector("#rock");
rock.addEventListener("click", playRound);
rock.choice = "ROCK";
let paper = document.querySelector("#paper");
paper.addEventListener("click", playRound);
paper.choice = "PAPER";
let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playRound);
scissors.choice = "SCISSORS";
let winner = document.querySelector(".winner");
let wins = 0;
let losses = 0;
let draws = 0;

function playRound() {

let player = event.currentTarget.choice;
let playerChoice = document.querySelector(".playerChoice");
playerChoice.textContent = event.currentTarget.choice;
let computer = getComputerChoice();
let compChoice = document.querySelector(".compChoice");
compChoice.textContent = computer;
let resultDisplay = document.querySelector(".result");
winner.textContent = "";

if (player === computer) {
        resultDisplay.textContent = "Draw!";
        draws++;
    }
    else {
        switch (player) {
        case "ROCK":
        if (computer === "PAPER") {
            resultDisplay.textContent = "You Lose! Paper Beats Rock";
            losses++;
        }
        else {
            resultDisplay.textContent = "You Win! Rock Beats Scissors";
            wins++;
        }
        break;
        case "PAPER":
        if (computer === "SCISSORS") {
            resultDisplay.textContent = "You Lose! Scissors Beats Paper";
            losses++;
        }
        else {
            resultDisplay.textContent = "You Win! Paper Beats Rock";
            wins++;
        }
        break;
        case "SCISSORS":
        if (computer === "ROCK") {
            resultDisplay.textContent = "You Lose! Rock Beats Scissors";
            losses++;
        }
        else {
            resultDisplay.textContent = "You Win! Scissors Beats Paper";
            wins++;
        }
        break;
    }
}

if (wins > 4) {
    winner.textContent = "You Won!" + "(" + wins + "  : " + losses + " )";
    wins = 0;
    losses = 0;
    draws = 0;
}
if (losses > 4) {
    winner.textContent = "You Lost!" + "(" + wins + " : " + losses + " )";
    wins = 0;
    losses = 0;
    draws = 0;
} 

let score = "Score: " + wins + " : " + losses + "." + " (Draws: " + draws + ")";
let scoreDisplay = document.querySelector(".score");
scoreDisplay.textContent = score;
return score;
}