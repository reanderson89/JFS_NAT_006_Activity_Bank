const colors = require("colors");
const inquirer = require("inquirer"); 

const welcome = () => {
    console.log("Welcome to my example for this activity!".brightGreen);

    checkIfRead();
}

const checkIfRead = () => {
    inquirer.prompt([
        // this is an example of a 'confirm' type of question. The answer given is a yes or no and the value it returns is either true for yes, or false for no. The value given to the "name" attribute is what will be used to access the answer from the user.
        {
            type: "confirm",
            name: "didTheyRead",
            message: "Have you read through the code to get an idea of what is happening?"
        }
    ]).then(answers => {
        // notice how we access the "didTheyRead" property from our answer variable. Each question that we ask stores a key/value pair on the 'answer' variable. Where the key is the "name" attribute from the question, and the value is the answer given by the user.
        if(answers.didTheyRead === true){
            console.log("Awesome! Let's get started.".bgBlue);
            startApplication();
        } else {
            console.log("Please read through the code first to get an idea of what is happening.".brightRed)
            return;
        }

    })
}

const startApplication = () => {
    inquirer.prompt([
        // each question we ask is an object stored in an array.
        // a "list" type allows you to create an array of choices to show to the user. The user will select their answer using the arrows and enter key.
        {
            type: "list",
            name: "feeling",
            message: "On a scale from 1-5, how are you feeling right now?",
            choices: [1,2,3,4,5]
        },
        // the "input" type allows users to enter in any answer they would like
        {
            type: "input",
            name: "userName",
            message: "What is your name?"

        }
        // the answers given by the users are passed to the "answers" parameter below. The answers parameter is essentially an object made up of key/value pairs. Where the keys are generated from the "name" attribute from the questions, and their values are either the users choice or their input.
        // the answer parameter would look like this if we console.log() it... {feeling: 2, userName: "Robert"} assuming they chose 2 for the first question and typed "Robert" for the second one.
    ]).then(answers => {
        
        // if you want to see it for yourself then uncomment the line below and run the script again. You will see the object right after you give your name as an answer.
        // console.log(answers)

        if(answers.feeling < 2){
            console.log(`${answers.userName} if your are feeling stuck please reach out for help!`.brightBlue);
        } else if(answers.feeling < 5){
            console.log(`Keep up the good work ${answers.userName}, console.log() things as needed to check your values. The documentation linked in the README.md is your best friend.`.brightBlue);
        } else {
            console.log(`Way to go ${answers.userName}! Maybe check out the documentation to add some more spice to your project once you get it up and running!`.brightBlue);
        }
        return;
    })
}

welcome();