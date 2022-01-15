let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        console.log(playerSelection);
        let computerSelection = computerPlay();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        console.log('Player score =', playerScore);
        console.log('Computer score =', computerScore);

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
    return computerSelection
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