// Global require's
const inquirer= require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown')

// An array of objects detailing questions for user input

const questions= [
    
    // Project title name
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        // installed validator library with (npm install validator)
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue');
                return false;
            }
        }
    },
    // Descripion of project
    {
        type:'input',
        message: 'Write a brief description of your project: ',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log ('Please enter a decription of your project to continue')
                return false;
            }
        }
    },
    // How to install project
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation information to continue');
                return false;
            }    
        } 

    },
    // How to use project
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information on how to use project');
                return false;
            }
        }

    },
    // How to test project
    {
        type: 'input',
        message: 'How do you test this project? ',
        name: 'testing',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please describe how to test this project');
                return false;
            }
        }
    },
    // Who contributed to the project
    {
        type: 'input',
        message: 'Who are the contributors of this project?',
        name: 'contribution',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information on who have contributed on this project');
                return false;
            }
        }
    },
    // user can select which license from checkbox
    {
        type: 'list',
        message: 'Choose a license for your project (Required)',
        name: 'license',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please pick a license for the project to continue');
                return false;
            }
        }
    },
    // Enter Github username
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    //Enter user Email address
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    },
]   



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err)
        throw err;
        console.log('you have created a README file!')
    })
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile("README.md", generateMarkdown(userInput));
    });
};



// Function call to initialize app
init();
