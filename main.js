const choice = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}

//testing if it returns the expected 
// console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Enter 'rock', 'paper' or 'scissors'");

    return humanChoice.toLowerCase();
}

// testing if it returns the expected
// console.log(getHumanChoice());

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === 'paper' && computerChoice ==='rock'){
            console.log("You won! Paper beats rock");
            humanScore++;
        }else if(humanChoice === 'paper' && computerChoice ==='scissors'){
            console.log("You lost! Scissors beats paper");
            computerScore++;
        }else if(humanChoice === 'rock' && computerChoice ==='scissors'){
            console.log("You won! Rock beats scissors");
            humanScore++;
        }else if(humanChoice === 'rock' && computerChoice ==='paper'){
            console.log("You lost! Paper beats rock");
            computerScore++;
        }else if(humanChoice === 'scissors' && computerChoice ==='paper'){
            console.log("You won! Scissors beat paper");
            humanScore++;
        }else if(humanChoice === 'scissors' && computerChoice ==='rock'){
            console.log("You lost! Rock beats scissors");
            computerScore++;
        }else if(humanChoice ===  computerChoice){
            console.log("Its a tie! Play again");
        }else{
            console.log("Ooops try again");
        }
        console.log(`Human score: ${humanScore} Computers score: ${computerScore}`);
        
      }
      for(let i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
      }
}

playGame();
  



