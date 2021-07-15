//For creating class to use Events
const EventElements = require('events');


//object of Event class
const event = new EventElements();

//Creating Custom Events
//Defining the functionality of custom event
event.on("MyWorkProfile" , () => {
    console.log("Developed By Khushwant Singh Rathore");
});

//For Multiple Callback Through Single event
event.on("MyWorkProfile" , () => {
    console.log("IONIC APP :- Developed By Khushwant Singh Rathore");
});

event.on("MyWorkProfile" , () => {
    console.log("Android & IOS Application : Developed By Khushwant Singh Rathore");
});

//For Event Emit 
// Note Event emit Must be used after event defining
event.emit("MyWorkProfile");


