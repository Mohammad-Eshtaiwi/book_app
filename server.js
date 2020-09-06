const express = require("express");
const app = express();
const superagent = require("superagent");
require("dotenv").config();
// express setup
const PORT = process.env.PORT || 3000;
app.use(express.static("./public"));
app.use(express.urlencoded());
app.set("view engine", "ejs");

// routes

app.get("/", (req, res) => {
    res.render("./pages/index");
});
app.get("/searches/new", (req, res) => {
    res.render("./pages/searches/new");
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
