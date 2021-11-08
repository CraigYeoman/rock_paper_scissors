function computerPlay() {
    const computerOptions = ['rock', 'paper', 'scissors']
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerSelection)
    return computerSelection
}



function playRound(playerSelection, computerSelection) {
     if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
         (playerSelection === 'paper' && computerSelection === 'rock') || 
         (playerSelection === 'scissors' && computerSelection === 'paper')) {
         return 'You win!'
     }

     else if (playerSelection == computerSelection) {
         return 'Tie!'
     }

     else {((playerSelection == 'rock' && computerSelection == 'paper') 
     || (playerSelection == 'paper' && computerSelection == 'scissors') 
     || (playerSelection == 'scissors' && computerSelection == 'rock')) 
        return 'You lose :('
     }
     
}

const playerSelection = window.prompt('Rock, paper, or scissors?', '')
console.log(playerSelection)
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))

function game() {
    computerSelection
    playerSelection
    playRound(playerSelection, computerSelection)
    console.log(playRound)
}