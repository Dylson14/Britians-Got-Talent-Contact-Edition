const inquirer = require("inquirer");
const locationPrompt = require("./Prompts/locationPrompt");
const connectDB = require("./connection");
const {showData, showLocation} = require("./db/queries")

// Start will be the only function called to make things simpler
const Start = () => {
    inquirer.prompt(locationPrompt)
    .then((answers) => {

        // using trims and toLowerCase method.
        console.log(answers);
        // showData();
        showLocation(answers);


        
    })
}

Start();