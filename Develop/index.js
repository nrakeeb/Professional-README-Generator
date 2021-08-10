
// Global require's
const inquirer= require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown')

// An array of objects detailing questions for user input
function userInput() {
    return inquirer.prompt([

   

    
    // Project title name
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'project title',
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
    {
        type: 'input'
    },
    {
        type: 'input'
    }

]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
