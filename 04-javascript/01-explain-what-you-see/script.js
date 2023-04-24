    var userName = prompt("What's your name?");

    alert("Welcome to our page " + userName);

    var confirmSleep = confirm("Did you sleep last night?");

    var sleepType = "bad";
    var sleepHours = 5;
    var wokeUpAtHome = true;

    if (confirmSleep) {
      alert("Hopefully it was good sleep" + " " + userName + "?");
    }
    else {
      alert("So sorry to hear that" + " " + userName);
    }

    if (sleepType === "good") {
      alert("It was good sleep!");
    }
    else {
      alert("Looks like it could have been better");
    }

    if (sleepHours < 7) {
      alert("You should try to get more sleep");
    } else if (sleepHours > 10) {
        alert("Oh no! my day is gone!")
    } else {
        alert("That was just right!")
    }

    if (wokeUpAtHome) {
      alert("Phew...");
    }
    else {
      alert("...not again!")
    }


