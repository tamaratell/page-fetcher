const request = require('request');

const fs = require("node:fs");
const { isBuffer } = require('node:util');

const fetcher = (url, location) => {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(location, body, (err) => {
      //if error print error
      if (err) {
        console.log(err);
      }
      //otherwise get file information (size)
      const stats = fs.statSync(location);
      const size = stats.size;
      //and console.log message
      console.log(`Downloaded ${size} bytes to file ${location}`);
    });
  });
};




//TASKS
//You need to make an http request and wait for the response.
//After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

//EXPECTED
//> node fetcher.js (http://www.example.edu/, ./index.html)
// Downloaded and saved 3261 bytes to ./index.html