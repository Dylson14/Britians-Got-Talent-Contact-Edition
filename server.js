const inquirer = require("inquirer");
const locationPrompt = require("./Prompts/locationPrompt");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection");
const {showData, showLocation} = require("./db/queries");
// Spell Checker
SpellChecker = require ('spellchecker');

// Start will be the only function called to make things simpler
const Start = () => {
    inquirer.prompt(locationPrompt)
    .then((answers) => {
        // console.log("This is the first console log:" + JSON.stringify(answers.locationInput));
    
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

// Start(); <-- don't delete

let word = "Springfield"

var checkWord= SpellChecker.isMisspelled(word);
console.log(checkWord);

var spellCheck = SpellChecker.getCorrectionsForMisspelling(word);
console.log(spellCheck);






