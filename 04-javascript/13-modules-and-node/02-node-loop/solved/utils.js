// create a function that has one parameter
// The parameter will be an array of strings
// create a loop inside the function that prints each string to the terminal


const displayArray = function(arr){
    arr.forEach(item => {
        console.log(item)
    });
}

let myVar = "Hello World"




// export your function
module.exports = { displayArray, myVar }