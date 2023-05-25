// AN API IS A PROGRAM THAT SOMEONE BUILT TO HANDLE REQUESTS

// A FETCH REQUEST RETURNS A PROMISE

// Step 1: refactor the following code so that the fetch() request is in a function. the function should be called getUsers(). 

// Step 2: Try to get access to the information returned from the fetch call either in the global space or another function.

fetch("https://reqres.in/api/users")
.then(response => {
    console.log(response)
    if(response.ok){
        return response.json()
    } 
})
.then( jsonResponse => {
    console.log(jsonResponse)
})










// Bonus: Create another function called getUser() that has a parameter of "id" and makes a fetch() request for the user with the given id when called.



