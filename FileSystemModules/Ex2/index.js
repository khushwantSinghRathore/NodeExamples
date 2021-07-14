const { error } = require('console');
const fs  = require('fs');

//For creating Folder
fs.mkdirSync("testcase");


//Creating File inside a folder 
fs.writeFileSync("testcase/bio.txt", "Adding data in it for futhere explaination.");

//Appending The data to the file inside folder("testcase")
fs.appendFileSync("testcase/bio.txt", `
This line to append the data which is going to be a part of file bio.txt`);


//Reading Data without Buffer values
fs.readFile('testcase/bio.txt', 'utf8' , function(err, data)  {
    if(err) throw err
    console.log(data);
});

//Reading result in variable 
const readdata = fs.readFileSync('testcase/bio.txt', 'utf8');
console.log(readdata);


//Rename of the  file 
fs.renameSync("testcase/bio.txt", "testcase/mybio.txt");

//Deletion of file as well as folder


//For file 
fs.unlinkSync('testcase/mybio.txt');

//For Directory
fs.rmdirSync("testcase");

//Another Way to do it
const pathofdir = "testcase";
fs.rmdirSync(pathofdir, {recursive : true} ,function(err)  {
    if(err) throw err
    console.log('directory is deleted');
});


