const fs = require('fs')
const http = require('http');

http.createServer(function (req, res) {
fs.readFile(__dirname + /data/ + '/info2.txt', "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
        }
    });
  });


