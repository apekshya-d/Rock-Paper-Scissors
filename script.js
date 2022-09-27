const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const final = document.querySelector('#final');
let playerScore = 0;
let computerScore = 0;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', game));

final.querySelector('button').addEventListener('click',() =>{
    location.reload();
});

function game(e){

    const playerSelection = e.target.innerHTML;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

}

function getComputerChoice (){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
    
}

function playRound( playerSelection, computerSelection) {
    
    let playerChoice = playerSelection.toUpperCase();
    const result = document.querySelector('#result');
    const description = document.querySelector("#description");
 
   if (playerChoice == "ROCK" && computerSelection == "SCISSORS" ){
        playerScore += 1;
        player.textContent = `Player: ${playerScore}`;
        result.textContent = "You WIN!";
        description.textContent =  "Rock beats scissors.";
    }
    else if (playerChoice == "ROCK" && computerSelection == "PAPER") {
        computerScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
        result.textContent = "You lose!";
        description.textContent = "Paper beats rock.";
    }
    else if (playerChoice == "PAPER" && computerSelection == "SCISSORS") {
        computerScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
        result.textContent = "You lose!";
        description.textContent = "Scissors beats paper.";
    }
    else if (playerChoice == "PAPER" && computerSelection == "ROCK") {
        playerScore += 1;
        player.textContent = `Player: ${playerScore}`;
        result.textContent = "You WIN!";
        description.textContent = "Paper beats rock.";
    }
    else if (playerChoice == "SCISSORS" && computerSelection == "ROCK") {
        computerScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
        result.textContent = "You lose!";
        description.textContent = "Rock beats scissors.";
    }
    else if (playerChoice == "SCISSORS" && computerSelection == "PAPER") {
        playerScore += 1;
        player.textContent = `Player: ${playerScore}`;
        result.textContent = "You WIN!";
        description.textContent = "Scissors beats paper.";
    } else {
        result.textContent = "It's a Tie!";
        description.textContent = "";
    }

    if(playerScore === 5){
       final.querySelector('p').textContent = "YOU WON!";
       final.showModal();
    }else if (computerScore === 5){
        final.querySelector('p').textContent = "YOU LOSE!";
        final.showModal();
    }

}