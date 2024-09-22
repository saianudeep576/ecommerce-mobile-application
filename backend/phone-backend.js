const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const app = express();
app.use(cors())

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

//getting the records
app.get("/getPhoneInfo", (req, res) => {
  const command = "SELECT * FROM PHONES"; //command for fetching the records, here we need to mention the table name
  database.query(command, (error, result) => {
    if (error) {
      res.json(error);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("successfully backend is up");
});
