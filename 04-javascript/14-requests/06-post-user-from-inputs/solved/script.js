// DOM VARIABLES
let userNameInput = document.getElementById("name");
let userJobInput = document.getElementById("job");
let submitBtn = document.getElementById("submitBtn");
let displayResponseElement = document.getElementById("message")

// Global Variables





const createUser = async function(user){
    let response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // JSON.stringify() turns our object into a string
        body: JSON.stringify(user),
      })
      let userReponse = await response.json()
      return userReponse
      
}

const displayUser = async function(userParam){
    let userFromDB = await createUser(userParam)
    console.log(userFromDB)
    displayResponseElement.innerText = `User ${userFromDB.name} was successfully created!`
}


// event listeners should be at bottom of application

submitBtn.addEventListener("click", function () {
    // get the values of the inputs
    let userName = userNameInput.value;
    let userJob = userJobInput.value;
  
// create an object with the users information
    let user = {
      name: userName,
      job: userJob,
    };
//   call the displayUser function and pass in the user object with the information input from the user
    displayUser(user)
    
  });
