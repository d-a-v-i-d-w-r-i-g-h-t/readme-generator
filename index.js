// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const newFileName = 'README.md';

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
    },
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
        choices: [
                    "MIT License",
                    "GNU AGPLv3",
                    "GNU GPLv3",
                    "GNU LGPLv3",
                    "Mozilla Public License 2.0",
                    "Apache License 2.0",
                    "Boost Software License 1.0",
                    "The Unlicense"
                ],
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
// a shorter array of test questions
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

// function to initialize app
function init() {

    // use inquire to ask questions, return data
    inquirer
    // .prompt(questions)
    .prompt(testQuestions)
    .then( (response) => {
            console.log('User Input: ', response);

            // call generateMarkdown to format data
            const readmeContent = generateMarkdown(response);

            console.log(readmeContent);

            // call writeToFile to create the file
            writeToFile(newFileName, newReadmeContent);
        })
        .catch((error) => {
            console.error('Error occurred: ', error);
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("Something else went wrong");
            }
        });
}


//  a function to write README file
function writeToFile(fileName, data) {
    console.log(
`File: ${fileName}
Content: ${data}`
    );

    // create 'output' folder if it doesn't exist
    const folderName = "output";
    if (!fs.existsSync(`./${folderName}`)) {
      fs.mkdir(folderName, (err) => {
        err
          ? console.error(`Error creating folder '${folderName}': ${err.message}`)
          : console.log(`Folder '${folderName}' created successfully.`);
      });
    }

    // write the file to the output folder
    fs.writeFile(`./${folderName}/${fileName}`, data, (err) => {
      err
        ? console.error(err)
        : console.log(`File '${fileName}' created successfully in folder ./${folderName}`);
    });
}



// function call to initialize app
init();
