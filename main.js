let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;        
        console.log(playerSelection);
        let computerSelection = computerPlay();
        console.log(computerSelection);
        playerPicture(playerSelection);
        computerPicture(computerSelection);
        playRound(playerSelection, computerSelection);
        console.log('Player score =', playerScore);
        console.log('Computer score =', computerScore);
        playerScoreBoard(playerScore);
        computerScoreBoard(computerScore);

        if (playerScore == 5) {
            console.log('Player wins the game!');
            removeInfo();
            newInfo.textContent = 'Player wins the game!';
            infoTitle.appendChild(newInfo);
        } else if (computerScore == 5) {
            console.log('Computer wins the game!');
            removeInfo();
            newInfo.textContent = 'Computer wins the game!';
            infoTitle.appendChild(newInfo);
        }
    });
});

function computerPlay() {
    const computerOptions = ['rock', 'paper', 'scissors']
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;
}

function computerPicture(computerSelection) {
    let computerSign = '';
    if (computerSelection === 'rock') {
        computerSign = '🪨'
    } else if (computerSelection === 'paper') {
        computerSign = '🧾'
    } else if (computerSelection === 'scissors') {
        computerSign = '✂️'
    }
    const computerRemove = document.getElementById("computer-Remove");
    computerRemove.remove();
    
    let computerPick = document.querySelector('#computer');
    let picks = document.createElement('div');
    picks.classList.add('sign');
    picks.id = 'computer-Remove';
    picks.textContent = computerSign;
    computerPick.appendChild(picks);
}

function playerPicture(playerSelection) {
    let playerSign = '';
    if (playerSelection === 'rock') {
        playerSign = '🪨'
    } else if (playerSelection === 'paper') {
        playerSign = '🧾'
    } else if (playerSelection === 'scissors') {
        playerSign = '✂️'
    }

    const playerRemove = document.getElementById("player-Remove");
    playerRemove.remove();
    
    let playerPick = document.querySelector('#player');
    let picks = document.createElement('div');
    picks.classList.add('sign');
    picks.id = 'player-Remove';
    picks.textContent = playerSign;
    playerPick.appendChild(picks);
}

function playerScoreBoard(playerScore) {
    const playerScoreRemove = document.getElementById("player-Score");
    playerScoreRemove.remove();
    
    let playerPoints = document.querySelector('#player-Board');
    let points = document.createElement('div');
    points.classList.add('sign');
    points.id = 'player-Score';
    points.textContent = playerScore;
    playerPoints.appendChild(points);
}

function computerScoreBoard(computerScore) {
    const computerScoreRemove = document.getElementById("computer-Score");
    computerScoreRemove.remove();
    
    let computerPoints = document.querySelector('#computer-Board');
    let points = document.createElement('div');
    points.classList.add('sign');
    points.id = 'computer-Score';
    points.textContent = computerScore;
    computerPoints.appendChild(points);
}

const infoTitle = document.querySelector('#info-title');
const newInfo = document.createElement('div');
function removeInfo(){
    const informationRemove = document.getElementById("info-replace");
    informationRemove.remove();
    newInfo.classList.add('sign');
    newInfo.id = 'info-replace';
}


function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;    
        console.log('You win the round!');
        removeInfo();
        newInfo.textContent = 'You win the round!';
        infoTitle.appendChild(newInfo);
    } else if (playerSelection == computerSelection) {
        console.log('Tie!');
        removeInfo();
        newInfo.textContent = 'Tie!';
        infoTitle.appendChild(newInfo);
    } else {((playerSelection == 'rock' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) 
        computerScore++;
        removeInfo();
        console.log('You lose the round:(');
        newInfo.textContent = 'You lose the round!';
        infoTitle.appendChild(newInfo);
    }   
}