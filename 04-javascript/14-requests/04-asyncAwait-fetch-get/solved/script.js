
// fetch("https://reqres.in/api/users")
// .then(response => {
//     console.log(response);
//     return response.json();
// }).then(users => {
//     console.log(users.data);
// })


// This is an example of an async function getUsers() that's job is to just get the users.data nd return it. Then the displayUsers() async function can use the await keyword to get the data and do something with it.

// This async function gets the data and returns it
const getUsers = async function(){
    let response = await fetch("https://reqres.in/api/users")
    let users = await response.json()
    return users.data
}

// this async function calls on the getUsers() to get the list of users and then displays them
const displayUsers = async function(){
    let users = await getUsers()
    console.log(users)
}

displayUsers()

