// you can write js hereff
console.log('exo-3');
var playerInput = prompt("Your choice ( rock, paper, scissors) ?")
playerInput = playerInput.toLowerCase();

function getPlayerChoice (playerChoice){
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors" || playerChoice === "bomb" ){
        return playerChoice;
    }
    else{
        return "ERROR";
    }
}
function getComputerChoice(){
    computerChoice = Math.random() * 3;
    if (computerChoice > 2){
        return "rock";
    }
    else if (computerChoice > 1){
        return "paper";
    }
    else if (computerChoice >= 0){
        return "scissors";
    }
    else {
        return "ERROR";
    }
    
}

function findwinner(playerChoice, computerChoice){
    if (playerChoice == "bomb"){
        return "won";
    }
    else if (playerChoice == computerChoice){
        return "tied";
    }
    else if (computerChoice == "rock"){
        if (playerChoice == 'paper'){
            return "won";
        }
        else {
            return "lost";
        }
    }
    else if (computerChoice == "paper"){
        if (playerChoice == 'scissors'){
            return "won";
        }
        else {
            return "lost";
        }
    }
    else if (computerChoicerock == "scissors"){
        if (playerChoice == 'rock'){
            return "won";
        }
        else {
            return "lost";
        }
    }
}





playerChoice = getPlayerChoice (playerInput);
computerChoice = getComputerChoice();

function playGame(playerChoice, computerChoice){
    console.log("joueur ===> " + playerChoice + " VS " + computerChoice + " <=== ordinateur");
    console.log('le resultat est : ' + findwinner(playerChoice, computerChoice))

}


playGame (playerChoice, computerChoice);