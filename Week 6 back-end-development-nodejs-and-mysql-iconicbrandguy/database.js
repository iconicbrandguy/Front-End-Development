// Import package
const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,         //but mysql port is defaul buit the port can be indicated where a different port is being used
    user: 'root',
    password: 'Elisha@99',
    database: 'node_crud'
});

// Connect to db
db.connect( (error) => {
    if(error){
        console.log('There was an error connection to DB:', error.stack) // error.stack -means where the error occured
        return;
    }
        console.log('Successfully connected to DB')
});

// Export the db connection     -This will make it available to other files within the database
module.exports = db;

