const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(bodyparser.json());
app.use(cors());

//establishing database connection
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sai@1999",
  database: "ecommerce", //need to mention the schema name
});

//checking database connection status
database.connect((error) => {
  if (error) {
    console.log("error connecting to DB");
  } else {
    console.log("successfully connected to DB");
  }
});

app.get("/checkUserAccess", function (req, res) {
  if (req.query.email.includes("@swetha.com")) {
    res.json({ newUser: false });
  } else {
    res.json({ newUser: true });
  }
});

app.post('/newUser', (_req, res) => {
  res.json({ message: "New user creation success" })
})

//creating column for new user
app.post('/createNewUser', (req, res) => {
  const payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    dateOfBirth: req.body.dateOfBirth
  };
  const command = 'INSERT INTO NEWUSER SET ?';
  database.query(command, payload, (error) => {
    if (error) {
      res.json("Creation of new user is not possible");
    }
    else {
      res.json("Creation of new user is success!!")
    }
  })
})

app.listen(3000, () => {
  console.log('Backend is up!!')
});
