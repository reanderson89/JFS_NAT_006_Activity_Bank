fetch("https://reqres.in/api/users/23")
// handle initial response
.then(response => {
    // the first .then() checks if the response is good
    console.log(response)
    return response.json()
})
// we get access to the data in the next .then() statement
.then( jsonResponse => {
    // here is where we can actually do something with the data for our application
    console.log(jsonResponse)
})
// if there is an error we will catch it by chaining a .catch() below
