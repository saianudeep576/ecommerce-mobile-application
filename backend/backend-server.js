const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyparser.json());
app.use(cors());

app.post("/checkUser", function (req, res) {
  if (req.query.name === "user" && req.body.name === "user") {
    res.json({ newUser: false, message: "Success old user" });
  } else if (req.query.name === "" || req.body.name === "") {
    res.json({ error: true, newUser: false, message: "Required is empty" });
  } else {
    res.json({ newUser: true, message: "New user" });
  }
});

app.listen(3000);
