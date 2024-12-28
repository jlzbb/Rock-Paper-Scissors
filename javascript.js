// write a function that get a random number
// depending on the result of that number, return a string "rock paper or scissors"

function getRandom() {
    return Math.random();
}

function getComputerChoice() {
    const random = getRandom();
    if (random >= 0 && random <= 0.3)
        return "rock";
    else if (random > 0.3 && random <= 0.6)
        return "paper";
    else
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
    else
        return "try again!";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock")
        return "it's a tie, play again!";
    else if (humanChoice == "rock" && computerChoice == "paper")
        return `You lose! paper beats rock! Your score is ${humanScore} vs ${++computerScore}`;
    else if (humanChoice == "rock" && computerChoice == "scissors")
        return `You win! rock beats scissors! Your score is ${++humanScore} vs ${computerScore}`;
    else if (humanChoice == "paper" && computerChoice == "paper")
        return "it's a tie, play again!";
    else if (humanChoice == "paper" && computerChoice == "rock")
        return `You win! paper beats rock! Your score is ${++humanScore} vs ${computerScore}`;
    else if (humanChoice == "paper" && computerChoice == "scissors")
        return `You lose! scissors beat paper! Your score is ${humanScore} vs ${++computerScore}`;
    else if (humanChoice == "scissors" && computerChoice == "paper")
        return `You win! scissors beat paper! Your score is ${++humanScore} vs ${computerScore}`;
    else if (humanChoice == "scissors" && computerChoice == "rock")
        return `You lose! rock beats scissors! Your score is ${humanScore} vs ${++computerScore}`;
    else if (humanChoice == "scissors" && computerChoice == "scissors")
        return "it's a tie, play again!";
    else
        return "I told you to enter either paper rock or scissor!";
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));