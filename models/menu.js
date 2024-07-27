const mongoose = require('mongoose')
const db = require('../db')

const menuItemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  taste: {
    type: String,
    enum: ['sweet', 'sour', 'spicy'],
    default: 'sweet',
    required:true
  },
  is_drink: {
    type: Boolean,
    default: false
  },
  ingredients: {
    type: [String],
    default:[]
  },
  num_sales: {
    type: Number,
    default:0
  }
})


const menuItems=db.model("MenuItems",menuItemsSchema);
module.exports=menuItems;