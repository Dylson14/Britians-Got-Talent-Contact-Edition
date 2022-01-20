const inquirer = require("inquirer");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection");
const {showData, showLocation} = require("./db/queries")

const Start = () => {
    inquirer.prompt(menuPrompt)
    .then((answers) => {
        console.log(answers);
        showData();
        showLocation(answers);
    })
}

Start();