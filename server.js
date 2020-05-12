const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");
const notes = JSON.parse(fs.readFileSync("db/db.json", "utf-8"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(true);
});

app.delete("/api/notes/:id", (req, res) => {
    const note = notes.find(c => c.id === parseInt(req.params.id));
    const index = notes.indexOf(note);
    notes.splice(index, 1);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
