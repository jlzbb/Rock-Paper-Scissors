// write a function that get a random number
// depending on the result of that number, return a string "rock paper or scissors"

function getRandom() {
    return Math.random();
}

function getComputerChoice() {
    if (getRandom() >= 0 && getRandom() <= 0.3)
        return "rock";
    else if (getRandom() > 0.3 && getRandom() <= 0.6)
        return "paper";
    else (getRandom() > 0.6 && getRandom() <= 1)
        return "scissors";
}

let humanChoice = prompt("enter paper, rock, or scissors!");

function getHumanChoice() {
    if (humanChoice == "paper")
        return "paper";
    else if (humanChoice == "rock")
        return "rock";
    else if (humanChoice == "scissors")
        return "scissors";
    else (humanChoice == 0 || undefined)
        return "try again!";
}