const inquirer = require("inquirer");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection");
const {showData, showLocation} = require("./db/queries")

// Start will be the only function called to make things simpler
const Start = () => {
    inquirer.prompt(menuPrompt)
    .then((answers) => {

        // using trims and toLowerCase method.
        console.log(answers);
        // showData();
        showLocation(answers);


        
    })
}

Start();