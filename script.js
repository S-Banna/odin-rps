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


function playRound() {

    let wins = 0;
    let losses = 0;
    let draws = 0;
    let notCounted = 0;

let player = event.currentTarget.choice;
let playerChoice = document.querySelector(".playerChoice");
playerChoice.textContent = event.currentTarget.choice;
let computer = getComputerChoice();
let compChoice = document.querySelector(".compChoice");
compChoice.textContent = computer;

if (player != "ROCK" && player != "PAPER" && player != "SCISSORS" ) {
    console.log("Round not counted.");
    notCounted++;
}
else {

    if (player === computer) {
        console.log("Draw!");
        draws++;
    }
    else {
        switch (player) {
            case "ROCK":
            if (computer === "PAPER") {
                console.log("You Lose! Paper Beats Rock");
                losses++;
            }
            else {
                console.log("You Win! Rock Beats Scissors");
                wins++;
            }
            break;
            case "PAPER":
            if (computer === "SCISSORS") {
                console.log("You Lose! Scissors Beats Paper");
                losses++;
            }
            else {
                console.log("You Win! Paper Beats Rock");
                wins++;
            }
            break;
            case "SCISSORS":
            if (computer === "ROCK") {
                console.log("You Lose! Rock Beats Scissors");
                losses++;
            }
            else {
                console.log("You Win! Scissors Beats Paper");
                wins++;
            }
            break;
        }
    }
}


let score = "Score: " + wins + " : " + losses + "." + "(Draws: " + draws + ", Not Counted:" + notCounted + ")";
return score;
}