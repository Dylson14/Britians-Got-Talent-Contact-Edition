const inquirer = require("inquirer");
const locationPrompt = require("./Prompts/locationPrompt");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection");
const {showData, showLocation} = require("./db/queries");

// Start will be the only function called to make things simpler
const Start = () => {
    inquirer.prompt(locationPrompt)
    .then((answers) => {
        // console.log("This is the first console log:" + JSON.stringify(answers.locationInput));

        // let oldStringAnsw = JSON.stringify(answers.locationInput);
        // console.log("This is old:" + oldStringAnsw);
    
        // showData();   <-- Don't delete
         showLocation(answers); 

        // Take the user back to the main menu; a work in progress
        // showMenu(answers); <-- Don't delete
    })

    // let sentence = "    This is a sentence."
    // let trimmed = sentence.trim()

    // console.log("1." + sentence);
    // console.log("2." + trimmed);
}

Start();
