let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choiceIndex = getRandomInt(choices.length);
    return choices[choiceIndex];
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, Paper or Scissor? ');
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        alert("DRAW");
        return;
    }else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
    } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
        computerScore += 1;
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        computerScore += 1;
    }

    alert(`Computer Score: ${computerScore}, Human Score: ${humanScore}`)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);