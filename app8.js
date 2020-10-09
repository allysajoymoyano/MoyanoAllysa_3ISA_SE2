const express = require('express');
const mysql2 = require('mysql2');


app.get('/third',(req,res) =>{
    let post ={cases: '3000', recovered: '3000', deaths: '3000'};
    let sql2 ='INSERT INTO stat SET ?';
    let query = db.query(sql2, post,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('added');
    });
});

app.get('/fourth',(req,res) =>{
    let sql2 ='SELECT * FROM stat';
    let query = db.query(sql2,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched');
    });
});