// make a function for user input
const getUserInput = function () {
  let userInput = prompt(
    "Type 'r' for rock, 'p' for paper, or 's' for scissors."
  );
  return userInput;
};

// make a function for computer choice
const getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3); // Math.random() random decimal from 0.0000 - .999999999999999
  let compChoice;

  switch (randomNum) {
    case 0:
      compChoice = "r";
      break;
    case 1:
      compChoice = "p";
      break;
    default:
      compChoice = "s";
      break;
  }
  return compChoice;
};

// make a function to run the game
const playGame = function(){
    let userInput = getUserInput();
    let compChoice = getComputerChoice();

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

}

playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
