console.log('server is starting');
var path = require('path');
var PORT = 3000;
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/page1",(req,res) => {
    res.sendFile(path.join(__dirname + '/public/page1.html'))
});

app.get("/page2",(req,res) => {
    res.sendFile(path.join(__dirname + '/public/page2.html'))
});

app.get("/page3",(req,res) => {
    res.sendFile(path.join(__dirname + '/public/error.html'))
});

var server = app.listen(3000,listening);

function listening(){
    console.log("listening...");
}



