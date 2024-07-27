const express = require('express')
const router = express.Router();

const person = require('./../models/person')

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const response = await newPerson.save()

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

    const data = await person.find();
    console.log("data Fetched");
    res.status(201).json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" })
  }
})


router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await person.find({ work: workType })
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

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true,
      runValidators: true
    });
    if (!response) {
      return res.status(404).json({ error: "Person not found" })
    }

    console.log("Data Changed");
    res.status(201).json(response)
  }
  catch (err) {
    console.log(err);
    res.status(400).json({ error: "Internal Server Error" })
  }
})




router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person not found" })
    }

    console.log("Data Deleted");
    res.status(201).json(response)
  }
  catch (err) {
    console.log(err);
    res.status(400).json({ error: "Internal Server Error" })
  }
})


module.exports = router