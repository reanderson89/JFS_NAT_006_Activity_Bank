# Group with describe

* In order to run a specific test file you will need to use the command `npm test testName.test.js`

* In jest we can group our tests to give them more meaningful names and structure using the "describe" keyword and function

```javascript

describe("This will describe the group of tests that will run", () => {
    // The tests will go in here

    // we can even have nested describes to further group our tests so they read more like a story.
    describe("This is a nested describe, and will show up indented from the first one when ran in the console", () => {
        // Tests relating to this group would go here
    })
})

```

* Refactor the code given in the calc2.test.js file so that the tests are grouped together inside of a describe. 

* Run the tests to make sure they still work. 

* Change their names so that it makes sense when you read them in the terminal.

* Add in a multiply test and divide test as well. They should work very similarly to the sum and difference ones.

* After making the test for them in the calc2.test.js file, go to the calc.js file and create the actual function that you are going to test.

* Make sure you are exporting and importing your functions

* Run them and make sure that they work