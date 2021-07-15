const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request" , (req , res) => {
    //Non Streaming Way of data read operation
    // fs.readFile("datafile.txt" ,  "utf8" , (err,  data) => {
    //     if(err) throw err;
    //     res.end(data);
    // });


    //For data Stream 
    //creating object for readable stream
    const rdStream = fs.createReadStream("datafile.txt");
    
    //Now events of stream EG :  data , end  , error , finish
    rdStream.on('data' , (chunkdata) => {
        res.write(chunkdata);
    });

    rdStream.on('end' ,() => {
        res.end();
    });

    rdStream.on('error' , (err) => {
        console.error(err);
        res.end("Error in file  access !");
    });
});

server.listen(5000, "127.0.0.1");

