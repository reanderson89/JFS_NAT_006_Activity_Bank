// Activity 1: using the .map() iterator, iterate through the prices array and return a new array containing the new prices after applying a 20% discount.


// your new array should look like this at the end: [80, 120, 160, 200]

let prices = [100, 150, 200, 250]

let discount = .2

const addDiscount = (pricesArr, discountAmount) => {
    let discountedPrices = pricesArr.map(price => price * (1 - discountAmount));
    return discountedPrices;
}



let newPrices = addDiscount(prices, discount)
console.log(newPrices)



// for loop version of the .map()

// let discountedPrices = [];

// for (let i = 0; i < prices.length; i++) {
//     const currentPrice = prices[i];
//     let discountedPrice = currentPrice * .8;
//     discountedPrices.push(discountedPrice)
// }


// Activity 2: Create a function that takes an array of strings and returns a new array containing the length of each string, using the .map() method.

// Example input: ["apple", "banana", "cherry", "date"]
// Example output: [5, 6, 6, 4]

let fruits = ["apple", "banana", "cherry", "date"]

const findFruitLength = (strArr) => strArr.map(item => item.length)

// this is doing the same thing as the above arrow function
// const findFruitLength = (strArr) => {
//     let fruitsLengths =  strArr.map(item => item.length)
//     return fruitsLengths
//  }



let result = findFruitLength(fruits)

console.log(result);



