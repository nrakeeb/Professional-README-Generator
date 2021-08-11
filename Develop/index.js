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
        name: 'projectTitle',
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
    {
        type: 'input',
        message: 'How should people contribute to this project? (Required)',
        name: 'contribution',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information on how to contribute to the project');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        message: 'Choose a license for your project (Required)',
        name: 'licensing',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Please pick a license for the project to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github Repo',
        message: 'Enter your GitHub Repository url (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Respository url address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your deployed Web url (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Web url address');
                return false;
            }
        }
    },
    

]);

// function to write README file
function writeToFile(fileName, data) {
    fs.writefile(fileName,data, (err) => {
        if (err)
        throw err;
        console.log('you have created a ReadME file!')
    })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
