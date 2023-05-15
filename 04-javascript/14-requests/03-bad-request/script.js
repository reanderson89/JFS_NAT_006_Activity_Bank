const makeRequest = async () => {
    try{
        let response = await fetch("https://reqres.in/api/users/23");
        if(!response.ok){
            throw new Error(`There was an error with status of ${response.status}`)
        }
        let usersJson = response.json();
        return usersJson;
    }
    catch(error){
        console.log(error);
    }
}

const anotherFunc = async () => {
    let response = await makeRequest();
    console.log(response);
}