const dir = 'assets';

const playerSelectionButtons = document.querySelectorAll('[data-player-selection]');

const playerHand = document.querySelector('#player-hand');
const computerHand = document.querySelector('#computer-hand');

const playerScoreLabel = document.querySelector('#player-score');
const computerScoreLabel = document.querySelector('#computer-score');

const winnerLabel = document.querySelector('#winner-text');

const playAgainButton = document.querySelector('#play-again-button');

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
        return ;
    }

    if(
        humanChoice === 'rock' && computerChoice === 'scissor' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissor' && computerChoice === 'paper'
    ){
        humanScore += 1;
        playerScoreLabel.textContent = humanScore;
    } else{
        computerScore += 1;
        computerScoreLabel.textContent = computerScore;
    }
}

function updateSelectedHands(playerSelection, computerSelection){
    computerHand.src = `${dir}/${computerSelection}.png`;
    playerHand.src = `${dir}/${playerSelection}.png`;
}

function determineWinner(){
    const winner = (humanScore > computerScore) ? "Human" : "Computer";
    winnerLabel.style.display = "block";
    winnerLabel.textContent = `${winner} Wins!`;
}

function disablePlayerSelectionButtons(){
    playerSelectionButtons.forEach((button) => {
        button.disabled = true;
    });
}

function togglePlayAgainButtonVisibility(){
    playAgainButton.classList.toggle("d-none");
}

function newRound(){
    humanScore = 0;
    computerScore = 0;

    playerHand.style.src = `${dir}/human.png`;
    computerHand.style.src = `${dir}/robot.png`;

    togglePlayAgainButtonVisibility();
    
}

playerSelectionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {

        const playerSelection = e.currentTarget.dataset.playerSelection;
        const computerSelection = getComputerChoice();

        updateSelectedHands(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);

        console.log(`Player: ${humanScore} | Computer: ${computerScore}`)

        if(humanScore === 5 || computerScore === 5){
            determineWinner();
            disablePlayerSelectionButtons();
            togglePlayAgainButtonVisibility();
        }
    })
})



