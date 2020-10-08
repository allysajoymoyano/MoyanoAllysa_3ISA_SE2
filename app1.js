//make directory asynch 
fs.mkdir(dirname, function () {  //fs.mkdir is a method used to create a directory asynchronously. //the function call back 
    fs.readFile(read, "utf8", function (err, data) { //function call back 
      if (err) {
        console.log("File not found");
      } else {
        console.log(dirname + " is created");
      }
      fs.writeFile(dirname + write, data, function (err) {
        if (err) {
          console.log("Directory does not exist......");
        } else {
          console.log(write + " is written at " + dirname);
        }
      });
    });
  });
  