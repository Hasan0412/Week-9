// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your project:'
      },
      {
        type: 'input',
        name: 'technologies used',
        message: 'What technologies are being used in this project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions:'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions:'
      },
      {
        type: 'input',
        name: 'license',
        message: 'Choose a license for this application:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the email address:'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();