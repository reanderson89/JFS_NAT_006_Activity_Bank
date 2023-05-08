

const userObj = {
    wins: 0,
    losses: 0,
    ties: 0,
    _choice: "",
    askUserChoice(){
        let userChoice = "";
        this._choice = userChoice; 
        return userChoice;
    }
}

const compObj = {
    wins: 0,
    losses: 0,
    ties: 0,
    _choice: "",
    generateCompChoice(){
        let randomNum = Math.floor(Math.random() * 3);
        let compChoice;
        if(randomNum === 0){
            compChoice = "r";
        } else if (randomNum === 1){
            compChoice = "s"
        } else if (randomNum === 2){
            compChoice = "p"
        }

        this._choice = compChoice; 

        return compChoice;
    }
}

const gameObj = {
    gameCounter:0,
    playGame(){
        this.gameCounter++;
        let userChoice = userObj.askUserChoice();
    let computerChoice = compObj.generateCompChoice();

    if ((userChoice === "r" && computerChoice === "s") ||
            (userChoice === "s" && computerChoice === "p") || 
            (userChoice === "p" && computerChoice === "r")) {
            userObj.wins++;
            compObj.losses++;
          } else if (userChoice === computerChoice) {
            userObj.ties++;
            compObj.ties++;
          } else {
            userObj.losses++;
            compObj.wins++;
          }

    //     alert(`Current Standings:
    // You won ${userObj.wins} time(s) and the computer won ${compObj.wins} time(s).
    // You lost ${userObj.losses} time(s) and the computer lost ${compObj.losses} time(s).
    // There was ${userObj.ties} tie(s).
    // ${(userObj.wins > compObj.wins ? `You Win!`: `The Computer Wins!`)}`)

    // if(confirm("Play again?")){
    //     this.playGame();
    // }
    }

    
}













