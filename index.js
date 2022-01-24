// bringing in the inquirer package
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// this is the package brought in to create the csv file.
const fastCSV = require("fast-csv"); 
// connecting the database.
const db = require("./config/connection");
const ws = fs.createWriteStream("./dist/talentList.csv");

// What we'll try to do is maintain a clear top-bottom flowchart-type order of things. There will be an overlying function that's the parent of all other functions. Whenever we wish to go back we will simply take a step up into higher parent functions.
const appMenu = () => {
    const showLocation = () => {
        // using inquirer we are able to prompt the user in the command-line,  I ike the inquirer package and its ability to onclude validation.
        inquirer.prompt([
            { 
                type: "input",
                name: "location",
                message: "Choose a location for your talent",
                validate:(answers) => {
                    // my conditions to avoid bad inputs
                    if(answers !== ""){
                        return true;
                    }else if(!isNaN(answers)){
                        return true;
                    }
                    return "please enter a valid location"
                }
            }
        ])

        .then((answers) => {
            // answers.location is the "key name"of the key-value pair name:"location"
            const location = answers.location
            searchDatabase(location);
        })
    }
    
    // This is the function responsible for cleaning up the user input and responsible for selecting the required data in the database. 
    const searchDatabase = (location) => {
        const simplified = location.trim().toLowerCase()

        db.query(
            // using MySQL we are able to identify specific data we wish to retrieve.
            `SELECT * FROM employee WHERE location='${simplified}'`,
            function (err, results) {
                // give some feedback to the user that the issue is coming from their input and not from the application
            if(err){ //Allows user to restart app without exiting the app. 
                console.log("couldn't find location, Make sure you got the right spelling")
                showLocation()
                return;
            }else if(results.length === 0) {
                console.log("couldn't find location, Make sure you got the right spelling")
                showLocation()
                return;
            }    
            
            console.table(results);
            // This is the function responsible for creating the CSV file which can then be imported to excel if need be.
            createCSV(results);
            }
        );
    } 

    // functionality for creating CSV file
    const createCSV = (results) => {
        fastCSV.write(results, {headers: true}).on("finish", () => {
            console.log("csv file written successfully")
        } ).pipe(ws)

    } 
// calling show location to start the chain of functions
    showLocation();
}
// The whole application, will be goverened by this one application. 
appMenu();