let humanScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    let choiceIndex = getRandomInt(choices.length);
    return choices[choiceIndex];
}

function getHumanChoice(){
    let humanChoice = prompt('Rock, Paper or Scissor? ');
    return humanChoice;
}
