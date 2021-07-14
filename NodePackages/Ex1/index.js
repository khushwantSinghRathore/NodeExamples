//For importing npm modules
const chalk =  require('chalk');
const validator = require('validator');

//Use case of chalk 
console.log(chalk.green.bold("Test Case Passed"));

console.log(chalk.red.inverse("Sorry Test Case Didn't passed"));

//Validator use Case
const result = validator.isEmail("Khush@myworkprofile.web.app");
console.log(result ? chalk.green.inverse(result) : chalk.red.bold.inverse(result));

//For False Condition
const res = validator.isEmail("Khush@myworkprofilewebapp");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));