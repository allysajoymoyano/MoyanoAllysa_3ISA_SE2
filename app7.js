const express = require('express');
const mysql2 = require('mysql2');


// Create connection
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "CovidDb"
});

// Connect

    db.connect((err) =>{
        if(err){
            throw err;
        }
        console.log('MySql Connected...')

    });

const app = express();

//Create DB
app.get('/first', (req,res) => {
    let sql2 = 'CREATE DATABASE CovidDb';
    db.query(sql2, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});


//Create Table
app.get('/second',(req,res) => {
    let sql2 = 'CREATE TABLE stat (id int AUTO_INCREMENT, cases VARCHAR(255), recovered VARCHAR(255), deaths VARCHAR(255) PRIMARY KEY (id))';
    db.query(sql2, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('table created...');
    });
});


app.listen('3000',() => {
    console.log('Server started on port 3000');
});

