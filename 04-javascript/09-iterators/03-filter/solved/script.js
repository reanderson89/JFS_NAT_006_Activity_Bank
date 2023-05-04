// Activity 1: use the .filter() method on the given array to filter out words longer than a specified length, the array returned should contain strings with 5 or less characters.

// Example input: ["apple", "banana", "cherry", "date"]
// Example output: ["apple", "date"]

let fruits = ["apple", "banana", "cherry", "date"]

let maxLength = 5

// the .filter() returns a new array filled with items that evaluate to true, based on the condition given.
let shortFruits = fruits.filter(fruit => fruit.length <= maxLength)

console.log(shortFruits)









// Activity: Create a function that filters out odd numbers from an array of numbers and returns a new array with only the even numbers, using the .filter() method.

// Example input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Example output: [2, 4, 6, 8, 10]

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const checkOddOrEven = (numsArr) => {
    let evenNums = numsArr.filter(num => num % 2 === 0)
    return evenNums
}

let result = checkOddOrEven(nums);
console.log(result);


