//Object Name 
const Obj = {
    Id : 1234,
    orderNum : 987,
    PackageName : "Iphone 12 PRO 256",
    DeliveryPin : 50054,
};


console.log(Obj.PackageName);

//Object to Json Convertion
const jsonObj = JSON.stringify(Obj);
console.log(jsonObj);

//Json to Object Convertion
const ObjJson = JSON.parse(jsonObj);
console.log(ObjJson);