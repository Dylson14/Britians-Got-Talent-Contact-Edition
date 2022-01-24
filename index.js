const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const fastCSV = require("fast-csv"); 
const db = require("./config/connection");
const ws = fs.createWriteStream("./dist/talentList.csv");

const appMenu = () => {
    const showLocation = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "location",
                message: "Choose a location for your talent",
                validate:(answers) => {
                    if(answers !== ""){
                        return true;
                    }else if(!isNaN(answers)){
                        console.log("LOOK OVER HERE: " + answers)
                        return true;
                    }
                    return "please enter a valid location"
                }
            }
        ])
        .then((answers) => {
            const location = answers.location
            searchDatabase(location);
        })
    }
    
    const searchDatabase = (location) => {
        const simplified = location.trim().toLowerCase()

        db.query(
            `SELECT * FROM employee WHERE location='${simplified}'`,
            function (err, results) {
            if(err){
                console.log("couldn't find location, Make sure you got the right spelling")
                showLocation()
                return;
            }else if(results.length === 0) {
                console.log("couldn't find location, Make sure you got the right spelling")
                showLocation()
                return;
            }    
            
            console.table(results);
            createCSV(results);
            }
        );
    } 

    const createCSV = (results) => {
        fastCSV.write(results, {headers: true}).on("finish", () => {
            console.log("csv file written successfully")
        } ).pipe(ws)

    } 

    showLocation();
}

appMenu();