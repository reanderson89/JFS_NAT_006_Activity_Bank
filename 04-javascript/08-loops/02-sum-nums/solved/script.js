const testData = [12,23,34,45,56,67,89,90]

// In this challenge, you are tasked to create a function that takes an array of numbers as input and calculates the sum of its elements using a for loop. Remember that any variable declared inside of a loop is declared for every iteration (every time the loop repeats)

// create a function that has one parameter that will an array of numbers
const addNums = function(numsArr){
    // create a for loop in the function, that adds all of the numbers from the array together
        let total = 0;

        for(let i = 0; i < numsArr.length; i++){
            total += numsArr[i]

            
        }
    
        return total;
    }
    
    let result = addNums(testData);

    console.log(result)
