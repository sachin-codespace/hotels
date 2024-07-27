require('dotenv').config()
const express = require('express')
const app = express()
const port =process.env.PORT|| 3001;

const db = require('./db')
// const person = require('./models/person')
// const menu = require('./models/menu')

const bodyParser = require('body-parser');
app.use(bodyParser.json());


// app.post('/person', async (req, res) => {
//   try {
//     const data = req.body;
//     const newPerson = new person(data);
//     const response = await newPerson.save()

//     console.log("data Saved");
//     res.status(201).json(response);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal server error" })
//   }
// })

// app.get("/person", async (req, res) => {
//   try {

//     const data = await person.find();
//     console.log("data Fetched");
//     res.status(201).json(data);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal server error" })
//   }
// })

// app.get('/person/:workType', async (req, res) => {
//   try {
//     const workType = req.params.workType;
//     if (workType == "chef" || workType == "manager" || workType == "waiter") {
//       const response = await person.find({work:workType})
//       console.log("Response Fetched");
//       res.status(201).json(response);
//     }
//     else {
//       res.status(400).json({ error: "Invalid work Type" });
//     }
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal server error" })

//   }
// })

// app.post('/menu', async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenu = new menu(data);
//     const response = await newMenu.save()

//     console.log("data Saved");
//     res.status(201).json(response);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal server error" })
//   }
// })
// app.get("/menu", async (req, res) => {
//   try {

//     const data = await menu.find();
//     console.log("data Fetched");
//     res.status(201).json(data);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal server error" })
//   }
// })



// const github = {
//   "message": "Not Found",
//   "documentation_url": "https://docs.github.com/rest",
//   "status": "404"
// }
// app.get("/github", (req, res) => res.send(github))

// app.get('/dal', function (req, res) {
//   var customized_dal = {
//     include: "onione",
//     exclude: "peas",
//     fried: true,
//     spicy: false
//   }
//   res.send(customized_dal)
//   // res.send('Please wait i will prepare dal for you')
// })


app.get('/', function (req, res) {
  res.send('Welcome.. How I can Help you?')
})

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes)


const menuRoutes=require('./routes/menuItemsRoutes');
app.use('/menu',menuRoutes)
app.listen(port, () => console.log("server is on "))