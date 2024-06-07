/* 
    Create new function named getComputerChoice
        return string value: "rock", "paper", "scissors"
        math.random
    Test function
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if(rand == 0) {
        return "Rock";
    }
    else if(rand == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose: Rock, Paper or Scissors.");
    humanChoice = humanChoice.toUpperCase();

    while(humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS") {
        humanChoice = prompt("Choose: Rock, Paper, Scissors.");
    }
    
    return humanChoice;
}

 function playRound(humanChoice, computerChoice) {
    if(humanChoice !== computerChoice) {
        if(humanChoice == "ROCK" && computerChoice == "Scissors") {
            console.log("You win! " + humanChoice.charAt(0) + humanChoice.slice(1).toLowerCase() + " beats " + computerChoice);
            console.log("Score. Human: " + ++humanScore + " Computer: " + computerScore);
        }
        else if(humanChoice == "PAPER" && computerChoice == "Rock"){
            console.log("You win! " + humanChoice.charAt(0) + humanChoice.slice(1).toLowerCase() + " beats " + computerChoice);
            console.log("Score. Human: " + ++humanScore + " Computer: " + computerScore);
        }
        else if(humanChoice == "SCISSORS" && computerChoice == "Paper") {
            console.log("You win! " + humanChoice.charAt(0) + humanChoice.slice(1).toLowerCase() + " beats " + computerChoice);
            console.log("Score. Human: " + ++humanScore + " Computer: " + computerScore);
        } 
        else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice.charAt(0) + humanChoice.slice(1).toLowerCase());
            console.log("Score. Human: " + humanScore + " Computer: " + ++computerScore);
        }
    }
    else {
        
    }
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();