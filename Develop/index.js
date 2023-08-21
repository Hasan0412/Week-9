// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
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
        name: 'installation',
        message: 'Provide the installation instructions:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the use of this project?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please add any contributions:'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this application:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD']
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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md successfully created!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content using the provided answers
      const readmeContent = generateMarkdown(answers);
      
      // Write the README file
      writeToFile('READMEexample.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

// Function call to initialize app
init();