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
        } else if (computerScore == 5) {
            console.log('Computer wins the game!');
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

function playRound(playerSelection, computerSelection) {
     if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
         (playerSelection === 'paper' && computerSelection === 'rock') || 
         (playerSelection === 'scissors' && computerSelection === 'paper')) {
         playerScore++    
         console.log('You win the round!')
     }

     else if (playerSelection == computerSelection) {
        console.log('Tie!')
     }

     else {((playerSelection == 'rock' && computerSelection == 'paper') 
     || (playerSelection == 'paper' && computerSelection == 'scissors') 
     || (playerSelection == 'scissors' && computerSelection == 'rock')) 
        computerScore++
        console.log('You lose the round:(')
     }
     
}

//console.log(game())


function game() {
    for (let i = 1; i <= 5; i++) {
        let round = i;
        console.log('Round', round);
        let playerSelection = window.prompt('Rock, paper, or scissors?', '');
        console.log('Player choice =',playerSelection);
        let computerSelection = computerPlay();
        console.log('Computer choice =', computerSelection);
        computerSelection;
        playerSelection;
        playRound(playerSelection, computerSelection);
        console.log('Player score =', playerScore);
        console.log('Computer score =', computerScore);
    }
    if (playerScore > computerScore) {
        console.log('Player wins the game!');
    } else if (playerScore == computerScore) {
        console.log('Game ends in a tie!');
    } else {
        console.log('Computer wins game!');
    }
    return 'Refresh page to play again'
}