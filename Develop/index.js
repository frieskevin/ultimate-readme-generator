//Packages needed
const inquirer = require('inquirer');
const generation = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');

//Array of questions for inquirer to ask and capture data
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter testing instructions.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter testing instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license.');
                return false;
            }
        }
    },
];



//Writes the data to fileName
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        return new Promise((resolve, reject) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    });
};

//Initializes app, calling inquirer and writing the markdown code to a file with the input data
function init() {
    return inquirer
        .prompt(questions)
        .then((answerData) => {
            writeToFile('./dist/readme.md', generation.generateMarkdown(answerData));
        });
};

// Function call to initialize app
init();
