const final = document.querySelector('#final');
let rounds = [];

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', game));

final.querySelector('button').addEventListener('click',() =>{
   rounds = [];
   showResults();
   final.close();
});

function game(e){

    const playerSelection = e.target.innerHTML;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    showResults();
}

function getComputerChoice (){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
    
}

function playRound( playerSelection, computerSelection) {
    
    let playerChoice = playerSelection.toUpperCase();

    const RULES = {
        ROCK : "PAPER",
        PAPER : "SCISSORS",
        SCISSORS : "ROCK",
    };

    if (playerChoice === computerSelection){
        rounds.push({result: "It's a Tie!", description: "", winner: ""});
    }else if (playerChoice === RULES[computerSelection]){
        rounds.push({result: "YOU WIN!", description: `${playerChoice} beats ${computerSelection}`, winner: "player" });
    }else {
        rounds.push({result: "YOU LOSE!", description: `${computerSelection} beats ${playerChoice}`, winner: "computer"});
    };
}

function showResults() {

    const result = document.querySelector('#result');
    const description = document.querySelector("#description");
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');   
    playerScore = rounds.filter((round)=> round.winner === "player").length;
    computerScore = rounds.filter((round)=> round.winner === "computer").length;

    if (rounds.length === 0){
        result.textContent = "Let's play";
        description.textContent = "First one to Score 5 wins";
        player.textContent = "player: 0";
        computer.textContent = "computer: 0";
        return;
    }

    result.textContent = rounds[rounds.length-1].result;
    description.textContent = rounds[rounds.length-1].description;
    player.textContent = `player: ${playerScore}`;
    computer.textContent = `computer: ${computerScore}`;
    
    if (playerScore === 5) {
        final.querySelector('p').textContent = "YOU WON!";
        final.showModal();
    }else if (computerScore === 5) {
        final.querySelector('p').textContent = "YOU LOSE!";
        final.showModal();
    }

}