const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyparser.json());
app.use(cors());

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

app.listen(3000, () => {
  console.log('Backend is up!!')
});
