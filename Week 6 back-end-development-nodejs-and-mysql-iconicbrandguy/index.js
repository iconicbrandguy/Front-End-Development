// Create server using express library  / -To do a general installation of package which you can access in any 
//directory/folder on the pc, use "npm install -g express"

// Import the package(s) to use
const express = require('express')
const db = require('./database')
const connection = require('./database'); //for the table

// Initialization
const app = express();


// Create table  -The table creation code is placed before the route definitions and server launch, ensuring the table is created when the server starts.
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
    );
`;

connection.query(createTableQuery, (err ,results) => {
    if(err) throw err;
    console.log('Table created:', results);
})



// Define routes
app.get('/', (request, response) =>{
    response.send('Hello, I am now using Express.JS package!')
})

//Define port
const port = 3300

// Launch the server
app.listen(port)