//Object to JSon

const OBJ = {
    Name : "Khushwant Singh",
    ID : 2345,
    Post : "Software Developer L1",
    Language : "English" ,
};

//Json convertion
const valJson  = JSON.stringify(OBJ);
console.log(valJson);

//Save it File 
const fs  =  require('fs');

//For Data Storage in json file  
fs.writeFile("Save.json" , valJson , (err) => {
    if(err) throw err;
    console.log("file saved");
});

//For  reading data from Json File
fs.readFile("save.json" , "utf8" , (err , data) =>{
    if(err) throw err;
    console.log("read file");
    console.log(data);
    //Again Conversion of Json data to Object
    console.log(JSON.parse(data));
});


