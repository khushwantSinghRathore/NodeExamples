//Path module 
const path = require('path');

//For object form of path we use parse
console.log(path.parse('I:/NodeJs/NodeExamples/PathModule/Ex1/demo.txt'));

//For only file name
console.log(path.basename('I:/NodeJs/NodeExamples/PathModule/Ex1/demo.txt'));

//For Only file extention 
console.log(path.extname('I:/NodeJs/NodeExamples/PathModule/Ex1/demo.txt'));

//For Path only to the file
console.log(path.dirname('I:/NodeJs/NodeExamples/PathModule/Ex1/demo.txt'));


//For Object use 
const pathUrl = 'I:/NodeJs/NodeExamples/PathModule/Ex1/demo.txt';
const pathObj = path.parse(pathUrl);

//For File  name
console.log(pathObj.name);

//For File Ext
console.log(pathObj.ext);

//For Filr name with Ext
console.log(pathObj.base);

//For Root of the path
console.log(pathObj.root);

//For Directory name of the path
console.log(pathObj.dir);