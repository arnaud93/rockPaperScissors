

/*write code below this line*/


const words = ["rock", "paper", "scissors"];

/*code for computer choice */ 

function getComputerChoice(wordArray) {
    let currentIndex = wordArray.length; 
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * wordArray.length);
        return wordArray[randomIndex];
    } 
}

// prompt the user for their choice


let userChoice = prompt("What's your choice? (rock, paper or scissors)");

// Function to return the user's choice
function getHumanChoice(choice) {
    return choice;
}

// Test the function
console.log("You chose:", getHumanChoice(userChoice));


//Create variables humanScore and computerScore
//Give them initial values of 0
var humanScore = 0;
var computerScore = 0;

//Create a new function named playRound
//Define parameters for playRound
function playRound(humanChoice, computerChoice) {
    let humanChoice = choice.toLowerCase();
}
