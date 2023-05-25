// the first thing that you want to do is make a fetch() request to get the users data.
const getUsers = async function(){
    let response = await fetch("https://reqres.in/api/users")
    let users = await response.json()
    return users.data
}


// generate cards based off of user information
const displayUser = async function(){
    let userList = document.getElementById("displayUsers")
    let usersArr = await getUsers()
    usersArr.forEach(user => {
        console.log(user)
        let newCard = document.createElement("div")
        newCard.classList.add("col-4")
        newCard.setAttribute("data-id", user.id)
        newCard.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${user.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
    <p class="card-text">Email: ${user.email}</p>
  </div>
</div>
        `
        userList.append(newCard)
    });
}

displayUser()

// {
//     "id": 1,
//     "email": "george.bluth@reqres.in",
//     "first_name": "George",
//     "last_name": "Bluth",
//     "avatar": "https://reqres.in/img/faces/1-image.jpg"
// }



    // create elements to hold cards
    // give the cards content, example: the users information
    // display the cards somewhere