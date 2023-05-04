// Activity 1: use the .forEach() iterator on the names array to display a greeting to the console for each person

// Example input: ["Alice", "Bob", "Charlie"]
// Example output (console): "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"

// ES6 function expression
// const logNames = function(name){
//     console.log(`Hello, ${name}!`)
// }

let names = ["Alice", "Bob", "Charlie"]

names.forEach((name) => {
   `Hello, ${name}!`
})

console.log(result)


// Activity 2: Create a function that takes an array of integers and logs whether each number is even or odd. Use the .forEach() method for this activity.

// Example input: [1, 2, 3, 4, 5]
// Example output (console): "1 is odd", "2 is even", "3 is odd", "4 is even", "5 is odd"

let nums = [1, 2, 3, 4, 5];




const logOddOrEven = function(intArr){

    intArr.forEach(num => {
    if(num % 2 === 0){
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
})
}

logOddOrEven(nums)


