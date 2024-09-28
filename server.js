const notes = require('./notes.js');
var _ = require('lodash');



console.log("server page is loaded");
let age = notes.age;
let result = notes.addNumber(age+18,11);
console.log('result is now'+" "+result);

let data = ["person","person",1,2,1,2,'name','age','2'];
let filter = _.uniq(data);
console.log(filter);

console.log(_.isNumber("person"));

// let fs = require('fs'); // import this form in node js
// let os = require('os');


// let user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi' +" " + user.username+ '!\n', ()=>(
//     console.log('file is created')
// ));

// console.log(os); // knowing the library this form 

