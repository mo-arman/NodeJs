const express = require('express') // import express
const app = express(); // they give any name but this is alrady maked so that using this name 
const db = require('./db');

app.get('/', function (req, res) { // get a method request => req and response => res
  res.send('Welcome to my hotel....How i can help you')
})



app.listen(3000,()=>{
    console.log('listening on port 3000'); // check server is live and Alive
}) // port 