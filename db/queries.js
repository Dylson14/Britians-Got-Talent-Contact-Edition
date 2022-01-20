const db = require("../connection");
const menuPrompt = require("../Prompts/menuPrompt")

const showData = () => {
        db.query("SELECT * from employee", function (err, results){
        console.table(results);
    })
}

const showLocation = (answers) => {
        // console.log("We are in showLocation " + answers.locationInput);
        db.query(`SELECT * FROM employee WHERE location='${answers.locationInput}'`, function (err, results){
            console.table(results);
        })
      
}


module.exports = {showData, showLocation};
