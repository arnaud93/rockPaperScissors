

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

let humanChoice = prompt("What's your choice");


// Function to return the user's choice



// Test the function



//Create variables humanScore and computerScore
//Give them initial values of 0



//Create a new function named playRound
//Define parameters for playRound

