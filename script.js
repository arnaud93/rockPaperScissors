

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
