const express=require('express');
const router=express.Router();


const menu = require('./../models/menu')

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menu(data);
    const response = await newMenu.save()

    console.log("data Saved");
    res.status(201).json(response);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" })
  }
})
router.get("/", async (req, res) => {
  try {

    const data = await menu.find();
    console.log("data Fetched");
    res.status(201).json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" })
  }
})

router.get('/:tasteType', async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy") {
      const response = await menu.find({taste:tasteType})
      console.log("Response Fetched");
      res.status(201).json(response);
    }
    else {
      res.status(400).json({ error: "Invalid work Type" });
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" })
 
  }
})


module.exports=router