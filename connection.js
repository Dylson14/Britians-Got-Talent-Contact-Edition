// Bringing in the mysql2 package
const mysql = require("mysql2");

// Conecting to the database
const connectDB = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"talent_db"
    },
);

module.exports = connectDB;