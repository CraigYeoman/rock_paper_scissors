let playerScore = 0
let computerScore = 0

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

console.log(game())



function game() {
    for (let i = 0; i <= 5; i++) {
        let playerSelection = window.prompt('Rock, paper, or scissors?', '')
        console.log(playerSelection)
        let computerSelection = computerPlay();
        computerSelection
        playerSelection
        playRound(playerSelection, computerSelection)
        console.log(playerScore)
        console.log(computerScore)
    }

}