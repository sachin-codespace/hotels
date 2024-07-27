const mongoose = require('mongoose')
const db = require('../db')


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 16,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum: ['chef', 'waiter', 'manager'],
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  email: {
    type: String,
    unique: true
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true
  }
})

// create person model
const personModel = db.model('person', personSchema)
module.exports = personModel