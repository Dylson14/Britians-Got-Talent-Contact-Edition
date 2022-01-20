const inquirer = require("inquirer");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection")

const Start = () => {
    inquirer.prompt(menuPrompt)
    .then((answers) => {
        console.log(answers);
    })
}

Start();