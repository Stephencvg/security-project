require('dotenv').config()
// ES6 import 'dotenv/config'
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require('./server/database/connection.js');
const userDb = require('./server/model/model.js');
const { name } = require("ejs");
const encrypt = require('mongoose-encryption')

const port = 3000;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Databse
connectDB()

app.get('/', (req, res) => {
  res.render('home.ejs')
});

app.get('/login', (req, res) => {
  res.render('login.ejs')
});

app.get('/register', (req, res) => {
  res.render('register.ejs')
});


app.post('/register', (req, res) => {
  const newUser = new userDb({
    email: req.body['username'],
    password: req.body['password']
  })
  newUser.save();
  res.render('secrets.ejs')
})

app.post('/login', (req, res) => {
  const userName = req.body['username'];
  const password = req.body['password']

  userDb.findOne({ email: userName }).then((result) => {
    if (result) {
      if (result.password === password) {
        res.render('secrets.ejs')
      }
    } else {
      res.redirect('/')
    }
  }).catch(err => {
    console.log(err)
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});