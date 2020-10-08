const fs = require("fs");

fs.mkdirSync('data');

let myReadStream = fs.createReadStream(__dirname + '/info.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + /data/ + '/info2.txt');

myReadStream.pipe(myWriteStream);

fs.readFile(__dirname + /data/ + '/info2.txt', "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });