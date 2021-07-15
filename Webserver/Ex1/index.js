//For Web server  Require('http')
const http = require("http");

//To Create Server for Http Request and Response 
const server = http.createServer( (req,res) => {
    //For response 
    res.end("This message from nodejs Server!");
});

//For Request listen 
server.listen('5000' , '127.0.0.1' , () => {
    console.log('Node server is running on port 5000!');
});