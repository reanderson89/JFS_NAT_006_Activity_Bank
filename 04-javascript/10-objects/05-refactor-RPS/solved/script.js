// user object
const userObj = {
  wins: 0,
  losses: 0,
  ties: 0,
  choice: "",
  getChoice(){
    this.choice = prompt("please choose 'r' for rock, 'p' for paper, or 's' for scissors")
    return this.choice;
  }
}

const compObj = {
  wins: 0,
  losses: 0,
  ties: 0,
  choice: "",
  getChoice(){
    this.choice = ["r","p","s"][Math.floor(Math.random() * 3)]
    return this.choice;
  }
}

const gameObj = {
  gamesPlayed: 0,
  gamesToPlay: 0,
  askGamesToPlay(){
    this.gamesToPlay = Number(prompt("How many games would you like to play?"))
    console.log(this.gamesToPlay);
  },
  playGame(){
    let userChoice = userObj.getChoice();
    let computerChoice = compObj.getChoice();
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`)

    if ((userChoice === "r" && computerChoice === "s") ||
            (userChoice === "s" && computerChoice === "p") || 
            (userChoice === "p" && computerChoice === "r")) {
            userObj.wins++;
            compObj.losses++;
            alert("You've won " + userObj.wins + " time(s)!");
          } else if (userChoice === computerChoice) {
            userObj.ties++;
            compObj.ties++;
            alert("You've tied " + userObj.ties + " time(s).");
          } else {
            userObj.losses++;
            compObj.wins++;
            alert("The computer has won " + compObj.wins + " time(s).");
          }
    this.gamesPlayed++
        //   4th hint
    alert(`Current Standings:\nWins: ${userObj.wins}\nLosses: ${userObj.losses}\n Ties: ${userObj.ties}`)


    if(this.gamesPlayed < this.gamesToPlay){
      console.log(this.gamesPlayed)
      console.log(this.gamesToPlay)
        this.playGame();
    }
  }
}

gameObj.askGamesToPlay();
gameObj.playGame();







