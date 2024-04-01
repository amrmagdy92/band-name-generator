import express from "express";
import bodyParser from "body-parser";
import noun from "./constants/nouns.js";
import adjective from "./constants/adjectives.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];
  const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
  res.render("index.ejs", {
    noun: randomNoun,
    adjective: randomAdjective
  })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});