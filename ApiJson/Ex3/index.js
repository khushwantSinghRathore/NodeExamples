const http = require('http');
const fs = require('fs');

const server =  http.createServer( (req , res) => {
    if(req.url == "/"){
        res.end("Welcome for Api Hub!");
        console.log(`${__dirname}`);
    } else if(req.url == "/productApi"){
        //For Access of Json file
        fs.readFile(`${__dirname}/AllAPI/dummy.json` , 'utf8' , (err, data) => {
            if(err) throw err;
            //For response Header
            res.writeHead(200 , { "Content-type" : "application/json"});
            //For Passing The Json data 
            res.end(data);
        }) ;
        //res.end("Production Api Response");
    }
    else{
        //For Responce Header ERROR
        res.writeHead(404 ,  { "Content-type" :  "text/html"}) ; 
        //For Response Message 
        res.end("Error Please Hit correct Url !");
    }

});

server.listen("5000" ,  "127.0.0.1" ,  () => {
    console.log("Server  is running");
});