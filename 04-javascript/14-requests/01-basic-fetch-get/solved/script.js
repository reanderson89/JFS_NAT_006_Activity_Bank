// AN API IS A PROGRAM THAT SOMEONE BUILT TO HANDLE REQUESTS

// A FETCH REQUEST RETURNS A PROMISE

// a fetch makes a GET request by default
// endpoint: specifies a certain URL route in an application
fetch("https://reqres.in/api/users/23")
// handle initial response
.then(response => {
    // the first .then() checks if the response is good
    console.log(response)
    if(!response.ok){
        // response.json() gives us the body of the response in a format we can work with
        throw new Error("response failed")
    } 
    return response.json()
})
// we get access to the data in the next .then() statement
.then(users => {
    // here is where we can actually do something with the data for our application
    console.log(users)
})

// .then() handles our promises

