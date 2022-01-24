const inquirer = require("inquirer");
const db = require("../connection");
const locationPrompt = require("../Prompts/locationPrompt");
const menuPrompt = require("../Prompts/menuPrompt");
SpellChecker = require("spellchecker");

const showData = () => {
  db.query("SELECT * from employee", function (err, results) {
    console.table(results);
  });
};

const showLocation = (answers) => {
  // console.log("We are in showLocation " + answers.locationInput);

    let word = `${answers.locationInput}`;

    // Checks to see if the word is misspelled or not, false if not, true if spelled incorrectly.
    var checkWord = SpellChecker.isMisspelled(word);
    var spellCorrection = SpellChecker.getCorrectionsForMisspelling(word);

        // If true, means word is spelt incorrectly.
    if (checkWord) {
        console.log(`Incorrect Spelling, did you mean :${spellCorrection}`);
    }
    
    db.query(
        `SELECT * FROM employee WHERE location='${answers.locationInput}'`,
        function (err, results) {
        console.table(results);
        }
    );
};

// Work in progress: Trying to see how we can ask the user if they wish to search again in another location, without having to restart the application.

const showMenu = () => {
    inquirer.prompt(menuPrompt)
    .then((answers) => {
        if(answers.mainMenu === "Yes"){
            console.log("Please search again")
        }
        console.log("The app has ended")
        return 0;

    })

}

module.exports = { showData, showLocation, showMenu };
