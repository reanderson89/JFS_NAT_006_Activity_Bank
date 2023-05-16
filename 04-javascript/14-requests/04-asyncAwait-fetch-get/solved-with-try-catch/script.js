// This is an example of an async function getUsers() that's job is to just get the users.data nd return it. Then the displayUsers() async function can use the await keyword to get the data and do something with it.

// This async function gets the data and returns it
const getUsers = async function(){

    try{
        // try runs our conditions and checks if everything is working. If things fail, we throw errors and catch them below
        let response = await fetch("https://reqres.in/api/users/23")
        if(response.ok === false){
            throw new Error("Response failed")
        } else {
            let users = await response.json()
            return users.data
        }
    }catch(error){
    // here is where we catch our errors
    console.error(error);
    }
}

// this async function calls on the getUsers() to get the list of users and then displays them
const displayUsers = async function(){
    // this is different then what was demo'ed before. But I like the simplicity of it more. We check to see if nothing exists on usersArr, if nothing exists we just "return" and end the function. If it does exist, then we move onto the console.log() and other potential code to run. We can do this because the error is still being caught in the "try-catch" from the getUsers() function.
    let usersArr = await getUsers();
    if(!usersArr){
        return
    }
    console.log(usersArr)
}

displayUsers()


