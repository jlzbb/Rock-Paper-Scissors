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

const buttons = document.querySelectorAll("button");

const body = document.querySelector("#body");
const div = document.createElement("div");
     
div.classList.add("result");
body.appendChild(div);    
div.textContent = "";

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function checkGameOver(humanScore, computerScore) {
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
    if (humanScore === 5) {
        div.textContent = `Game Over! You won the Game! Your score is ${humanScore} vs ${computerScore}`;}
    else if (computerScore === 5) {
        div.textContent = `Game Over! You Lost the Game! Your score is ${humanScore} vs ${computerScore}`;}
    }
}

function playRound(humanChoice) {
    if (gameOver) return;
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        div.textContent = `It's a tie, you chose ${humanChoice} and computer chose ${computerChoice}. Your score is ${humanScore} vs ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        div.textContent = `You win! ${humanChoice} beats ${computerChoice}! Your score is ${humanScore} vs ${computerScore}`;
    } else {
        computerScore++;
        div.textContent = `You lose! ${computerChoice} beats ${humanChoice}! Your score is ${humanScore} vs ${computerScore}`;
    }   
    checkGameOver(humanScore,computerScore);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        playRound(humanChoice);
    })
});