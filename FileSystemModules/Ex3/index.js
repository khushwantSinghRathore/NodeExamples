const fs =require('fs');

//Creating Directory in asyn method
fs.mkdir('computerFile', (err) => { if(err) throw err; console.log('Directory is created');});


//Creating File in  asyn method
fs.writeFile('computerFile/intro.txt' , " message for the file inside intro.txt" , (err) => { if(err) throw err;  console.log('File is created')});


//Appending data to the file through asyn
fs.appendFile('computerFile/intro.txt' , ` 
this is the next line to be appended in the file.` , (err)  => { if(err) throw err;  console.log('file appended'); });


//Read data from file through asyn 
fs.readFile('computerFile/intro.txt' , 'utf8' , (err , data) => { if(err) throw err; console.log(data);});

//Rename of file through asyn 
fs.rename('computerFile/intro.txt', 'computerFile/impt.txt', (err) => { if(err) throw err; console.log('Rename done');});

//Deleting file through asyn 
fs.unlink('computerFile/impt.txt' , (err) => { if(err) throw err ; console.log('File is deleted');});

//deleting the folder through asyn 
fs.rmdir('computerFile', (err) => { if(err) throw err; console.log('Directory is Deleted');});