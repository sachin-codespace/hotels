const mongoose = require('mongoose');
require('dotenv').config();
const mongoDbUrl = process.env.MONGO_DB_URL; 
// const mongoDbUrlLocal=process.env.MONGO_DB_URL_LOCAL;
// const mongoDbUrl = "mongodb+srv://sachinprajapatijaipur:sachin7427@cluster0.h7fhu3t.mongodb.net/"; 


// Set up connection
mongoose.connect(mongoDbUrl, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Event listeners
db.on('connected', () => console.log("Connection successful with MongoDB server"));
db.on('error', (err) => console.log(`Error in connection with MongoDB server: ${err}`));
db.on('disconnected', () => console.log("Disconnected successfully from MongoDB server"));

// Module export
module.exports = db;