function getRandom() {
    return Math.random();
}

function getComputerChoice() {
    const random = getRandom();
    if (random <= 0.3) 
        {return "rock";}
    else if (random <= 0.6) 
        {return "paper";}
    else 
        {return "scissors";}
}

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Enter paper, rock, or scissors!").toLowerCase();
        if (humanChoice === "paper" || humanChoice === "rock" || humanChoice === "scissors") {
            return humanChoice;
        }
        else {
        alert("Invalid input! Please enter paper, rock, or scissors.");}
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie, play again!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}! Your score is ${humanScore} vs ${computerScore}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}! Your score is ${humanScore} vs ${computerScore}`;
    }
}

function playGame() {
    let roundsPlayed = 0;

    while (roundsPlayed < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        roundsPlayed++;
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} vs ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. Final score: ${humanScore} vs ${computerScore}. Better luck next time!`);
    } else {
        console.log(`It's a tie! Final score: ${humanScore} vs ${computerScore}.`);
    }
}

playGame();