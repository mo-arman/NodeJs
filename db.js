
const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('error to MongoDB server:',err);
});

db.on('disconnected',()=>{
    console.log('disconnected to MongoDB server');
});

module.exports = db;
// const mongoose = require('mongoose'); // import mongoose

// // Define MongoDB connection URL
// const mongoURL = ' mongodb+srv://localhost:27017/hotels';

// // setup MongoDB
// mongoose.connect(mongoURL,{
//     userNewUrlParser:true, // this mandotry parameter
//     userUnifiedTopology:true // this is mandatory parameter
// })

// // get the default connection
// // Mongoose maintain the default connection object representing the MongoDB connection
// const db = mongoose.connection;

// // Define event listeners for database connection

// db.on('connected',()=>{
//     console.log('connected to MongoDB server');
// });
// db.on('error',(err)=>{
//     console.log('error to MongoDB server:',err);
// });
// db.on('disconnected',()=>{
//     console.log('disconnected to MongoDB server');
// });

// // Export the database connection
// module.exports = db;