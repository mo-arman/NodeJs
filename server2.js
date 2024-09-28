const express = require("express"); // import express
const app = express(); // they give any name but this is alrady maked so that using this name
const db = require("./db");

// this is body parser middle ware
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // store req.body

const Person = require("./models/person");

app.get("/", function (req, res) {
  // get a method request => req and response => res
  res.send("Welcome to my hotel....How i can help you");
});

// Post Route to Add a person
app.post("./person", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const savedPerson = await newPerson.save();
    console.log("data saved");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});
// Post route to add a person

// app.post("./person", (req, res) => {
//   const data = req.body; // Assuming the request body contains the person data

//   // create a new Person document using the Mongoose model

//   const newPerson = new Person(data);

//   //Save the new person database
//   newPerson.save((error, savedperson) => {
//     if (error) {
//       console.log("Error saving person", error);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       console.log("Data Save Successfully");
//       res.status(200).json(savedperson);
//     }
//   });
//   // newPerson.name = data.name;
//   // newPerson.age = data.age;
//   // newPerson.mobile = data.mobile;
//   // newPerson.email = data.email;
//   // newPerson.address = data.address;
// });
app.listen(3000, () => {
  console.log("listening on port 3000"); // check server is live and Alive
}); // port
