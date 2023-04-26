// ## Rules for rock-paper-scissors

// * Rock: beats scissors, loses to paper, and ties against itself.
// * Paper: beats rock, loses to scissors, and ties against itself.
// * Scissors: beats paper, loses to rock, and ties against itself.

// ## Start with:

// - Creating variables for the two players and hard-code either "rock", "paper", or "scissors" on them.
let player1 = "paper";
let player2 = "rock";

console.log("Player1: ", player1)
console.log("Player2: ", player2)

// - Create the conditions to check the variables against each other to see who the winner will be. Use the above "Rules" to help you build the logic.
if (player1 === player2) {
  console.log("it's a tie!");
  // writing conditions for when player1 wins
} else if (
  (player1 === "rock" && player2 === "scissors") ||
  (player1 === "paper" && player2 === "rock") ||
  (player1 === "scissors" && player2 === "paper")
) {
  console.log("Player 1 wins!");
} else {
  console.log("Player 2 wins!")
}

// - However the game ends, there should be a result printed to the console.
