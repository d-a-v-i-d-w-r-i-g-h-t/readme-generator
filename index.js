// TODO: Include packages needed for this application
    const inquirer = require('inquirer');
    // import inquirer from inquirer // this is the new way under ECMA6, we can't do it that way yet

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project:",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    // use inquire to ask questions, return data

    // call generateMarkdown to format data

    // call writeToFile to create the file

}

// Function call to initialize app
init();

// init is the only function that gets called on its own

// use inquire to display questions to user
//  inquire asks user questions and returns back responses
//  add object that is returned from inquire that contains all the responses
//  object is called 'data' and includes all sorts of stuff

// call function generateMarkdown on collected data
//   located in the other javascript file
//   this will give us a big long string that is formatted

// call function writeToFile(filename, data)

// look in pseucoding channel, see file system documentation
// inquirer v8.2.4 uses common js instead of ECMA6


// npm install inquirer@8.2.4