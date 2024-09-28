const express = require('express') // import express
const app = express(); // they give any name but this is alrady maked so that using this name 
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person1 = require('./models/person1');

app.get('/', function (req, res) { // get a method request => req and response => res
  res.send('Welcome to my hotel....How i can help you')
})

app.post("./person1", async (req, res) => {
    try {
      const data = req.body;
  
      const newPerson = new Person1(data);
  
      const savedPerson = await newPerson.save();
      console.log("data saved");
      res.status(200).json(savedPerson);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server Error" });
    }
  });

app.listen(3000,()=>{
    console.log('listening on port 3000'); // check server is live and Alive
}) // port 