let playerScore = 0
let computerScore = 0
let gameWinner = ''


const playerOptions = document.getElementById('player-options');
const buttons = playerOptions.querySelectorAll('button');
const restartButton = document.getElementById('restart-button');
// getElementById

const playerPick = document.getElementById('player');
const computerPick = document.getElementById('computer');
const infoTitle = document.getElementById('info-title');
const newInfo = document.createElement('div');
const modal = document.getElementById('endGameModal');
const modalText = document.getElementById("endGameMessage");
const backGroundModal = document.getElementById('modalBackground');
const scorePlayer = document.getElementById('player-score');
const scoreComputer = document.getElementById('computer-score');
const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const directionsInformation = document.getElementById("info-replace");

restartButton.addEventListener('click', restartGame)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;        
        let computerSelection = computerPlay();
        playerPicture(playerSelection);
        computerPicture(computerSelection);
        playRound(playerSelection, computerSelection);
        scorePlayer.textContent = playerScore
        scoreComputer.textContent = computerScore
        

        if (playerScore == 5) {
            console.log('Player wins the game!');
            directionsInformation.textContent = 'Player wins the game!';
            gameWinner = 'Player'
            modalTransition();
        } else if (computerScore == 5) {
            console.log('Computer wins the game!');
            directionsInformation.textContent = 'Computer wins the game!';
            gameWinner = 'Computer'
            modalTransition();
        }
    });
});

function computerPlay() {
    const computerOptions = ['rock', 'paper', 'scissors']
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;
}

function computerPicture(computerSelection) {
    if (computerSelection === 'rock') {
        computerChoice.textContent = '🪨'
    } else if (computerSelection === 'paper') {
        computerChoice.textContent = '🧾'
    } else if (computerSelection === 'scissors') {
        computerChoice.textContent = '✂️'
    }
}

function playerPicture(playerSelection) {
    if (playerSelection === 'rock') {
        playerChoice.textContent = '🪨'
    } else if (playerSelection === 'paper') {
        playerChoice.textContent = '🧾'
    } else if (playerSelection === 'scissors') {
        playerChoice.textContent = '✂️'
    }
}

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;    
        directionsInformation.textContent = 'You win the round!';
    } else if (playerSelection == computerSelection) {
        directionsInformation.textContent = 'Tie!'
    } else {((playerSelection == 'rock' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) 
        computerScore++;
        directionsInformation.textContent = 'You lose the round :(';
    }   
}

function modalTransition() {
    backGroundModal.classList.add('activate');
    endGameModal.classList.add('activate');
    
    modalText.textContent = gameWinner + ' wins the game';
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    gameWinner = '';
    backGroundModal.classList.remove('activate');
    endGameModal.classList.remove('activate');
    computerChoice.textContent = ''
    playerChoice.textContent = ''

    scorePlayer.textContent = playerScore
    scoreComputer.textContent = computerScore
    directionsInformation.textContent = 'Pick an option';
}