const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request" , (req , res) => {

    //For data Stream 
    //creating object for readable stream
    const rdStream = fs.createReadStream("datafile.txt");
    rdStream.pipe(res);
  
});

server.listen(5000, "127.0.0.1");

