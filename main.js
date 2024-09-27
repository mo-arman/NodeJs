let prompt = require('prompt-sync')();

const age  = prompt("please Enter The Your Age:");

if(age<18){
    console.log("You get 20% discount!");
}else{
    console.log("You get 30% discount");
}
let a = 10;
let b= 20;
console.log("Arman");
let ans = a+ b;
console.log(typeof ans);

const person = {
    name:"Arman",
    age:22,
    isStudent:true,
    hobbies:["game","Read"],

};

console.log(person);