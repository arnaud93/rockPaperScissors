

console.log("Hello World");

// write code below this line

// code for computer choice 
/*
function getComputerChoice(computerChoice) {
    var computerChoice = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * computerChoice.length);
    let r = computerChoice[i];
    console.log("Random word:", r);}*/

function getComputerChoice() {
    let randomNum = Math.random();
    
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
    }
          

// prompt the user for their choice
function getHumanChoice() {

    const validChoices = ["rock", "paper", "scissors"];
    let userInput = prompt("Enter your choice (rock, paper, scissors):").toLowerCase().trim();
    
    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
         alert("Invalid choice. Please enter rock, paper or scissors");
        return getHumanChoice();
    }


}


//Create variables humanScore and computerScore
//Give them initial values of 0
var humanScore = 0;
var computerScore = 0;

//Create a new function named playRound
//Define parameters for playRound

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }  else if (
        humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper")
        {   
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
      else {
        console.log(`You lose ! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }}

//Call functions to run a single round
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log("You chose: ", humanChoice);
console.log("Computer chose: ", computerChoice);
playRound(humanChoice, computerChoice);

 
//Create function playGame
//playGame calls playRound to play 5 rounds, keeps track of scores
//playGame declares winner at the end

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice
    }
}
