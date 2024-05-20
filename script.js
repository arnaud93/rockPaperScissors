

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

/*code for the human choice */


