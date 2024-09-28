const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      age: {
        type: Number
      },
      work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true,
      },
      mobile: {
        type: Number,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      address: {
        type: String,
        required: true,
      },
      salary: {
        type: Number,
        required: true,
      },
});

const Person = mongoose.model('Person1',personSchema);
module.exports = Person;