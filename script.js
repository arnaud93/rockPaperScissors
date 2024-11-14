

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
      
console.log(getComputerChoice());

      

// prompt the user for their choice
function getHumanChoice() {

    const validChoices = ["rock", "paper", "scissors"];
    let userInput = prompt("Enter your choice (rock, paper, scissors):").toLowerCase().trim();
    
    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        prompt("Invalid choice. Please enter rock, paper or scissors");
        return getHumanChoice();
    }


}

console.log("You chose:", getHumanChoice());


// Test the function



//Create variables humanScore and computerScore
//Give them initial values of 0



//Create a new function named playRound
//Define parameters for playRound

