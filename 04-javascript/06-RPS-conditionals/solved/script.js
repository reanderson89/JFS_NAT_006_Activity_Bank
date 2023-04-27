let userInput = prompt("Type 'r' for rock, 'p' for paper, or 's' for scissors.");
let randomNum = Math.floor(Math.random() * 3) // Math.random() random decimal from 0.0000 - .999999999999999
let compChoice;

// This "if else" statement does the same thing as the switch statement below it
// if(randomNum === 0){
//     compChoice = "r"
// } else if(randomNum === 1){
//     compChoice = "p"
// } else {
//     compChoice = "s"
// }

switch (randomNum) {
    case 0:
        compChoice = "r"
        break;
    case 1:
        compChoice = "p"
        break;
    default:
        compChoice = "s"
        break;
}

console.log("userInput: ", userInput)
console.log("compChoice: ", compChoice)

if (userInput === compChoice) {
    alert(`
    You chose: ${userInput}
    Computer chose: ${compChoice}
    It's a tie!`);
} else if (
  (userInput === "r" && compChoice === "s") ||
  (userInput === "p" && compChoice === "r") ||
  (userInput === "s" && compChoice === "p")
) {
    alert(`
     You chose: ${userInput}
     Computer chose: ${compChoice}
     You win!`);
} else {
    alert(`
     You chose: ${userInput}
     Computer chose: ${compChoice}
     You lose!`);
}
