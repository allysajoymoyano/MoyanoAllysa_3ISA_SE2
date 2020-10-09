console.log('server is starting');
var path = require('path');
var PORT = 3000;
var express = require('express');
var app = express();

app.use(express.static('website'));

app.get("/query?name=Pedro",(req,res) => {
    res.sendFile("Hello Juan");
});

app.get("/param/Pedro",(req,res) => {
    res.sendFile("Hello Pedro");
});


var server = app.listen(3000,listening);

function listening(){
    console.log("listening...");
}
