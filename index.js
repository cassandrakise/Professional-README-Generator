const inquirer = require("inquirer")
const generateMarkdown = require('./generateMarkdown.js')
const fs = require("fs")

const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide a short table of contents.',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message:'Please provide directions on installation.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe the usage of this project.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please provide your license type',
        choices: ['mit', 'apache-2.0', 'agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'bsl-1.0', 'unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please provide the names of all contributors on this project.',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please describe the tests used to ensure success in deployment',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your GitHub link?',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
]

function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
    {
        console.log(response)
        const contents = generateMarkdown(response)
        writeToFile('README.md', contents)
    }
    );
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Success!'))

}

init();
