require('dotenv').config()
const express = require('express')
const app = express()
const port =process.env.PORT|| 4000;

const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Welcome.. How I can Help you?')
})

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes)


const menuRoutes=require('./routes/menuItemsRoutes');
app.use('/menu',menuRoutes)

app.listen(port, () => console.log("server is on "))