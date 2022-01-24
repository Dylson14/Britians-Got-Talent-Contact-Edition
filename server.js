const inquirer = require("inquirer");
const locationPrompt = require("./Prompts/locationPrompt");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection");
const {showData, showLocation} = require("./db/queries");

// Start will be the only function called to make things simpler
const Start = () => {
    inquirer.prompt(locationPrompt)
    .then((answers) => {

        let sentence = "  This is not the sentence you are looking for.   " 
        let trimmed = sentence.trim();
        console.log("1:" + sentence);
        console.log("2:" + trimmed);

        // using trims and toLowerCase method.

         console.log(`User wrote ${answers}`);
        // showData();   <-- Don't delete
         showLocation(answers); 


        // Take the user back to the main menu; a work in progress
        // showMenu(answers); <-- Don't delete
    })
}

Start();
