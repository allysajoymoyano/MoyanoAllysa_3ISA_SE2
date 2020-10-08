var fs = require("fs"); 

fs.readFile("info.txt", "utf-8", (err, data) => {
    if (err) { console.log(err) }
    console.log(data);
});

console.log('File read');