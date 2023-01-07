const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path : "./config.env"});
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

//mongoDB connection
const con = require('./db/connection.js');

//using routes 
app.use(require('./routes/route'));

con.then(db => {
    if(!db) return process.exit(1);

    //listen to the http server
    app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:${port}`)
    })
    
    app.on('error', err => console.log(`Failed to connect to the HTTP Server: ${err}`));
    //error in mongoDB connection
}).catch(error => {
    console.log(`Connection Failed! ${error}`);
});


