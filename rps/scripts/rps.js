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

  if (rand == 0) {
    return "Rock";
  } else if (rand == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose: Rock, Paper or Scissors.");
  humanChoice = humanChoice.toUpperCase();

  while (
    humanChoice !== "ROCK" &&
    humanChoice !== "PAPER" &&
    humanChoice !== "SCISSORS"
  ) {
    humanChoice = prompt("Choose: Rock, Paper, Scissors.");
  }

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  // DOM elements to display score and who won
  let humanWin = document.createElement("p");
  let humanLoss = document.createElement("p");
  let scoreWin = document.createElement("p");
  let scoreLoss = document.createElement("p");
  let gameWin = document.createElement("p");

  if (humanScore === 5) {
    gameWin.textContent = "You win!";
    results.appendChild(gameWin);
  } else if (computerScore === 5) {
    gameWin.textContent = "You lose! Computer wins!";
    results.appendChild(gameWin);
  } else if (humanChoice !== computerChoice) {
    if (humanChoice == "ROCK" && computerChoice == "Scissors") {
      humanWin.textContent =
        "You win! " +
        humanChoice.charAt(0) +
        humanChoice.slice(1).toLowerCase() +
        " beats " +
        computerChoice;

      scoreWin.textContent =
        "Score. Human: " + ++humanScore + " Computer: " + computerScore;

      results.appendChild(humanWin);
      results.appendChild(scoreWin);
    } else if (humanChoice == "PAPER" && computerChoice == "Rock") {
      humanWin.textContent =
        "You win! " +
        humanChoice.charAt(0) +
        humanChoice.slice(1).toLowerCase() +
        " beats " +
        computerChoice;

      scoreWin.textContent =
        "Score. Human: " + ++humanScore + " Computer: " + computerScore;

      results.appendChild(humanWin);
      results.appendChild(scoreWin);
    } else if (humanChoice == "SCISSORS" && computerChoice == "Paper") {
      humanWin.textContent =
        "You win! " +
        humanChoice.charAt(0) +
        humanChoice.slice(1).toLowerCase() +
        " beats " +
        computerChoice;

      scoreWin.textContent =
        "Score. Human: " + ++humanScore + " Computer: " + computerScore;

      results.appendChild(humanWin);
      results.appendChild(scoreWin);
    } else {
      humanLoss.textContent =
        "You lose! " +
        computerChoice +
        " beats " +
        humanChoice.charAt(0) +
        humanChoice.slice(1).toLowerCase();

      scoreLoss.textContent =
        "Score. Human: " + humanScore + " Computer: " + ++computerScore;

      results.appendChild(humanLoss);
      results.appendChild(scoreLoss);
    }
  } else {
  }
}

/* function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
} */

const display = document.querySelector("#display");

// Three buttons, one for each selection
const rock = document.createElement("button");
display.appendChild(rock);
rock.textContent = "ROCK";

const paper = document.createElement("button");
display.appendChild(paper);
paper.textContent = "PAPER";

const scissors = document.createElement("button");
display.appendChild(scissors);
scissors.textContent = "SCISSORS";

// Add event listener to buttons that calls playRound() with correct playerSelection
// every time a button is clicked
const btn = document.querySelector("#display");
btn.addEventListener("click", (event) => {
  playRound(event.target.textContent, getComputerChoice());
});

// Add div for displaying results
const results = document.createElement("div");
display.appendChild(results);

rock.classList.add("btn");
paper.classList.add("btn");
scissors.classList.add("btn");
