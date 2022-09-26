function getComputerChoice (){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
    
}

function playRound( playerSelection, computerSelection) {
    
    let player = playerSelection.toUpperCase();

 
   if (player == "ROCK" && computerSelection == "SCISSORS" ){
        win +=1;
        return "You WIN! Rock beats scissors."
    }
    else if (player == "ROCK" && computerSelection == "PAPER") {
        lose +=1;
        return "You lose! Paper beats rock."
    }
    else if (player == "PAPER" && computerSelection == "SCISSORS") {
        lose +=1;
        return "You lose! Scissors beats paper."
    }
    else if (player == "PAPER" && computerSelection == "ROCK") {
        win += 1;
        return "You WIN! Paper beats rock."
    }
    else if (player == "SCISSORS" && computerSelection == "ROCK") {
        lose += 1;
        return "You lose!Rock beats scissors. "
    }
    else if (player == "SCISSORS" && computerSelection == "PAPER") {
        win += 1;
        return "You WIN! Scissors beats paper."
    } else {
        return "It's a Tie!"
    }

}

function game(){
    for (let i = 0 ; i < 5 ; i++ ){

        const playerSelection = prompt("Rock, paper or scissors?");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));   
    }
}

let win = 0;
let lose = 0;

game();

if (win > lose){
    console.log("You WIN!");
}else if (lose > win){
    console.log("You lose!");
}else {
    console.log("It's a tie.");
}