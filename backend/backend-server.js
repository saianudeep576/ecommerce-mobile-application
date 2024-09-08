const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyparser.json());
app.use(cors());

app.post("/checkUserAccess", function (req, res) {
  if (req.body.email.includes("@swetha.com")) {
    res.json({ newUser: false });
  } else {
    res.json({ newUser: true });
  }
});

app.listen(3000, () => {
  console.log('Backend is up!!')
});
