//Parameter with Nodejs Events
const EvEt = require('events');

const event = new EvEt();

//Parameter Custom Event

event.on("Fullname" , (fn,ln) => {
    console.log(`${fn} ${ln}`);
});

//Now call for event
//Note : Event names are case sensitive double check for it
event.emit("Fullname" , "KhushWant Singh" , "Rathore");