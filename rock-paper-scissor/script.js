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
        return;
    }

    if(
        humanChoice === 'rock' && computerChoice === 'scissor' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissor' && computerChoice === 'paper'
    ){
        humanScore += 1;
    } else{
        computerScore += 1;
    }
}

function determineWinner(){
    let winner = (humanScore > computerScore) ? "Human" : "Computer";
    return `${winner} Wins`;
}

function resetScore(){
    humanScore = 0;
    computerScore = 0;
}




