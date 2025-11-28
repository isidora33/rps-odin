const choice = ["rock", "paper", "scissors"];

//scores tracking
let humanScore = 0;
let computerScore = 0;

//dom manipulation
const playBtns = document.querySelector('#play-btns');
const resultsDiv = document.querySelector('#results');
const resultsText = document.createElement("p");
const score = document.createElement("p");
resultsDiv.appendChild(resultsText);
resultsDiv.appendChild(score);


//functions
function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}
function playRound(humanChoice, computerChoice) {
        if(humanChoice === 'paper' && computerChoice ==='rock'){
            resultsText.innerText = "You won this round! Paper beats rock";
            humanScore++;
        }else if(humanChoice === 'paper' && computerChoice ==='scissors'){
            resultsText.innerText = "You lost this round! Scissors beats paper"
            computerScore++;
        }else if(humanChoice === 'rock' && computerChoice ==='scissors'){
            resultsText.innerText = "You won this round! Rock beats scissors";
            humanScore++;
        }else if(humanChoice === 'rock' && computerChoice ==='paper'){
            resultsText.innerText = "You lost this round! Paper beats rock";
            computerScore++;
        }else if(humanChoice === 'scissors' && computerChoice ==='paper'){
            resultsText.innerText = "You won this round! Scissors beat paper";
            humanScore++;
        }else if(humanChoice === 'scissors' && computerChoice ==='rock'){
            resultsText.innerText = "You lost round! Rock beats scissors";
            computerScore++;
        }else if(humanChoice ===  computerChoice){
            resultsText.innerText = "Its a tie! Play again";
        }else{
            resultsText.innerText = "Ooops try again";
        }
        score.innerText =`Your score: ${humanScore} Computers score: ${computerScore}`;

       if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            resultsText.innerText = "You won the game, congrats! Click Restart to play again.";
        } else {
            resultsText.innerText = "Computer won the game! Click Restart to play again.";
        }
        score.innerText = `${humanScore} / ${computerScore}`;
        playBtns.querySelectorAll('button').forEach(btn => btn.disabled = true);
    }

 }

 //events
playBtns.addEventListener('click', (event) => {
    let target = event.target;
    let humanSelection;
    let computerSelection;

    switch(target.id) {
        case 'rock':
            humanSelection = target.id;
            computerSelection = getComputerChoice();
            playRound(humanSelection,computerSelection);
            break;
        case 'paper':
            humanSelection = target.id;
            computerSelection = getComputerChoice();
            playRound(humanSelection,computerSelection);
            break;
        case 'scissors':
            humanSelection = target.id;
            computerSelection = getComputerChoice();
            playRound(humanSelection,computerSelection);
            break;
    }
});

//restart 
document.getElementById('restart').addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    resultsText.innerText = '';
    score.innerText = `Your score: 0 Computers score: 0`;
    playBtns.querySelectorAll('button').forEach(btn => btn.disabled = false);
});





