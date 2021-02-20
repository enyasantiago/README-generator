// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require ("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    //enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    {
    type: "input",
    message: "What is your application title?",
    name: "title"
    },
    {
    type: "input",
    message: "Describe the application",
    name: "description"
    },
    {
    type: "input",
    message: "Describe the installation instructions",
    name: "installation"
    },
    {
    type: "input",
    message: "Describe the usage information",
    name: "usage"
    },
    {
    type: "input",
    message: "Describe the contribution guidelines",
    name: "contributing"
    },
    {
    type: "input",
    message: "Describe the test instructions",
    name: "test"
    },
    {
    //choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    type: "list",
    message: "Choose a license for my application",
    choices: ["MIT", "Mozilla", "Apache", "none"],
    name: "license"
    },
    //enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
    type: "input",
    message: "Enter your GitHub username",
    name: "username"
    },
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    {
    type: "input",
    message: "Enter your email address",
    name: "email"
    }
]

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('success'));
}
// TODO: Create a function to initialize app
function init() 
{
    inquirer
    .prompt(questions)
    .then(response => writeToFile("README.md", generateMarkdown(response)));
        
}


// Function call to initialize app
init();
