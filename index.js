// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const newFileName = 'README.md.new';

//  an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:`What is your project's name?`,
    },
    {
        type: 'input',
        name: 'email',
        message:`What is your email address?`,
    },
    {
        type: 'input',
        name: 'username',
        message:'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'deployedURL',
        message:'Does your project have a deployed URL? If so, enter it here.',
    },
    {
        type: 'input',
        name: 'description',
        message:'Please write a short description of your project:',
    }, // if blank insert "[include description text here]"
    {
        type: 'input',
        name: 'installation',
        message:'What command should be run to install dependencies? If none, leave blank.',
    },
    {
        type: 'input',
        name: 'usage',
        message:'What does the user need to know about using the repo? If nothing, leave blank.',
    },
    {
        type: 'list',
        name: 'license',
        message:'What kind of license should your project have?',
        choices: [],
    },
    {
        type: 'input',
        name: 'contributions',
        message:'What does the user need to know about contributing to the repo? If nothing, leave blank.',
    },
    {
        type: 'input',
        name: 'test',
        message:'What command should be run to run tests? If none, leave blank',
    },
];
// an shorter array of test questions
const testQuestions = [
    {
        type: 'input',
        name: 'first name',
        message: 'What is your first name?',
    },
    {
        type: 'input',
        name: 'last name',
        message: 'What is your last name?',
    },
    {
        type: 'list',
        name: 'color',
        message: 'Pick a color:',
        choices: ['Red', 'Blue', 'Green', 'Chartreuse'],
    },
];

// TODO: Create a function to initialize app
function init() {

    // use inquire to ask questions, return data
    inquirer
        .prompt(testQuestions)
        .then( (response) => {
            console.log('User Input: ', response);
            newReadmeContent = generateMarkdown(answers);


        })
        .catch((error) => {
            console.error('Error occurred: ', error);
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("Something else went wrong");
            }
        });

    

    // call generateMarkdown to format data

    // console.log("New Readme Content: " + newReadmeContent);


    // // call writeToFile to create the file
    // writeToFile("file", newReadmeContent);
}


//  a function to write README file
function writeToFile(fileName, data) {
    console.log(
`File: ${fileName}
Content: ${data}`
    );

    fs.writeFile(fileName, data, (err) => {
        err
          ? console.error(err)
          : console.log("File created successfully!");
      });
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