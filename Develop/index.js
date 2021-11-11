// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generatorMarkdown = require('./util/generateMarkdown');

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
    message: 'Add a description to the project'
    },
    {
    type: 'input',
    name: 'Installation',
    message: 'Add a description to the project'
    },
    {
    type: 'input',
    name: 'Usage',
    message: 'Add a description to the project'
    },
    {
    type: 'input',
    name: 'Credits',
    message: 'Add a description to the project'
    },
    {
    type: 'input',
    name: 'License',
    message: 'Add a description to the project'
    },
    {
    type: 'input',
    name: 'Badges',
    message: 'Add a description to the project'
    },
    {
    type: 'input',
    name: 'Contributing',
    message: 'Add a description to the project'
    },
    {
    type: 'input',
    name: 'Test',
    message: 'Add a description to the project'
    },
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
