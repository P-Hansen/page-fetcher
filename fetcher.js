const request = require('request');
//import { writeFile } from 'fs';
const fs = require('fs');
const address = process.argv.slice(2,3);
const localPath = process.argv.slice(3);

  const fetcher = (address, destination) => {
  request(address, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body.size); // Print the HTML for the Google homepage.
    fs.writeFile(destination, body, () => {
      console.log(address + " Downloaded and saved " + fs.statSync(destination).size + " bytes to " + destination);
    });
  });
};

fetcher(address[0], localPath[0]);