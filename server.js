const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");
let notes = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'))

app.get("/", function (req, res) {
  return res.json(notes);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
