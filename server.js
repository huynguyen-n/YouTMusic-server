const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./app/config/db');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    
    // Initialize an Object 
    require('./app/routes/note')(app, database);
    require('./app/routes/youtube')(app, database);

    app.listen(port, () => {
        console.log('we are live on: ' + port);
    });
})

