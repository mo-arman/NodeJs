console.log('notes page loaded');

let age = 20; // clearly Export  then using the notes.js in server.js

const addNumber = function(a,b){
    return a + b;
}

module.exports = {
    age,
    addNumber
}