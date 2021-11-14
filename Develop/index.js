// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    {
    type: 'input',
    name: 'description',
    message: 'Describe your project:'
    },
    {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?'
    },
    {
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use:'
    },
    {
    type: 'input',
    name: 'Credits',
    message: 'List your collaborators with links to their GitHub profiles:'
    },
    {
    type: 'list',
    name: 'License',
    message: 'Add a license:' ,
    choices: ['Unlicense', 'MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'BSD 2-clause', 'LGPLv3', 'AGPLv3'],    
    },
    {
    type: 'input',
    name: 'Badges',
    message: 'Add a badge'
    },
    {
    type: 'input',
    name: 'Features',
    message: 'List your features:'
    },
    {
    type: 'input',
    name: 'Contributing',
    message: 'Want others to contribute?'
    },
    {
    type: 'input',
    name: 'Test',
    message: 'Provide examples on how to test?'
    },
    {
    type: 'input',
    name: 'github',
    message: 'Provide an github: '
    },
    {
    type: 'input',
    name: 'email',
    message: 'Provide an email:'
    },
]) 
.then(function(data) {
    fs.writeFile("README.md", generateMarkdown(data), function(err) {
        if (err) {
        return console.log(err);
        }

        console.log('Success!');
    });
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
