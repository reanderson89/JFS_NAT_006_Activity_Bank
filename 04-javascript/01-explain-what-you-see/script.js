// this line of code creates a popup box and asks for my name
var userName = prompt("What's your name?");

if (userName === null){
  alert("BOOOOOOOOO!!!")
  userName = "No Name Given"
} else {
  alert("Welcome to our page " + userName);
}



var confirmSleep = confirm("Did you sleep last night?");

if (confirmSleep) {
  alert("Hopefully it was good sleep" + " " + userName + "?");
  var sleepHours = prompt("How many hours did you sleep");

  if (Number(sleepHours) < 7) {
    alert("You should try to get more sleep");
  } else if (sleepHours > 10) {
    alert("Oh no! my day is gone!");
  } else {
    alert("That was just right!");
  }

  var sleepType = prompt("Was your sleep 'good' or 'bad'?");
  if (sleepType === "good") {
    alert("That's great!");
  } else {
    alert("Womp womp");
  }

  var wokeUpAtHome = confirm("Did you wake up at home?");

  if (wokeUpAtHome) {
    alert("Phew...");
  } else {
    alert("...not again!");
  }
} else {
  alert("So sorry to hear that" + " " + userName);
}


