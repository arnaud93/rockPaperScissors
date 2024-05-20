const words = ["rock", "paper", "scissors"];

function getComputerChoice(wordArray) {
    let currentIndex = wordArray.length; 
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * wordArray.length);
        return wordArray[randomIndex];
    } 
}


