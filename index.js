const fs = require("fs");
const util = require("util");
const Choices = require("inquirer/lib/objects/choices");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "If applicable, how do you install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "If applicable, how do you use your application?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license for your project?",
        choices: ["MIT", "Mozilla Public License 2.0", "Common Development and Distribution License", "GNU General Public License (GPL)"]
    },
    {
        type: "input",
        name: "contributing",
        message: "If applicable, how can others contribute to your application?"
    },
    {
        type: "input",
        name: "tests",
        message: "If applicable, provide any tests written for your project"
    }
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {

    try {
        const responses = await inquirer.prompt(questions);
        console.log("Your responses: ", responses);

        const userInfo = await api.getUserInfo(responses);
        console.log("Your gitHub user info: ", userInfo);

        const markdown = generateMarkdown(responses, userInfo);
        console.log(markdown);

        await writeFileAsync("Sample-README.md", markdown);
    }
    catch (error) {
        console.log(error)
    }

};

// function call to initialize program
init();
