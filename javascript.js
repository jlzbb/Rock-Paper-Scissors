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

let humanChoice = (prompt("enter paper, rock, or scissors!")).toLowerCase();

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanSelection == "rock" && computerSelection == "rock")
        return "it's a tie, play again!";
    else if (humanSelection == "rock" && computerSelection == "paper")
        return `You lose! paper beats rock! Your score is ${humanScore} vs ${computerScore++}`;
    else if (humanSelection == "rock" && computerSelection == "scissors")
        return `You win! rock beats scissors! Your score is ${humanScore++} vs ${computerScore}`;
    else if (humanSelection == "paper" && computerSelection == "paper")
        return "it's a tie, play again!";
    else if (humanSelection == "paper" && computerSelection == "rock")
        return `You win! paper beats rock! Your score is ${humanScore++} vs ${computerScore}`;
    else if (humanSelection == "paper" && computerSelection == "scissors")
        return `You lose! scissors beat paper! Your score is ${humanScore} vs ${computerScore++}`;
    else if (humanSelection == "scissors" && computerSelection == "paper")
        return `You win! scissors beat paper! Your score is ${humanScore++} vs ${computerScore}`;
    else if (humanSelection == "scissors" && computerSelection == "rock")
        return `You lose! rock beats scissors! Your score is ${humanScore} vs ${computerScore++}`;
    else if (humanSelection == "scissors" && computerSelection == "scissors")
        return "it's a tie, play again!";
    else (humanSelection == "try again!")
        return "I told you to enter either paper rock or scissor!";
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);