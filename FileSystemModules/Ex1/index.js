console.log("welcome to the nodeJs");

//varibles in nodejs
var mob = "Phone";
const a = "khushwant";

console.log(mob);
console.log(a);

//File system use case 


const fs = require('fs');

//For Write

//if file not persent it will create it else it will rewrite the value
fs.writeFileSync('readme.txt', 'this  is example of using file system for the client.');

//for append and write
fs.appendFileSync('readme.txt', " append the string to the readme.");


//For Read
const buffer_Data = fs.readFileSync("readme.txt");
//By direct printing of buffer_data will give you binary values. so use toString() function for the conversion. 
console.log(buffer_Data.toString());


//For Rename of file 

fs.renameSync("readme.txt", "readwrite.txt");