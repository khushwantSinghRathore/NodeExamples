//For OS Operating system we require os module
const  os  = require('os');


//For architecture 
const arch = os.arch();
console.log(arch);

//For os type
const ostype = os.type();
console.log(ostype);

//For Platform 
const platform = os.platform();
console.log(platform);

//For Memory space - return in Kb
const freeMemo = os.freemem();
console.log(freeMemo);
//For Memory space in  MB 
console.log(`${freeMemo/ 1024 / 1024}`);
//For Memory space in GB
console.log(`${freeMemo/ 1024 / 1024 / 1024}`);

//For Total Memory 
const totalMemo = os.totalmem();
console.log(totalMemo);

//For UserInfo
const userInfo = os.userInfo('utf8');
console.log(userInfo);