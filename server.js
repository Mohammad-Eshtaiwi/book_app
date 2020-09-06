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
app.get("/searches", (req, res) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=cat+title`;
    console.log(url);
    superagent.get(url).then(({ body }) => {
        const books = body.items.map((book) => new Books(book));
        res.render("pages/searches/show", { books });
    });
});
function Books(data) {
    console.log(data.volumeInfo.imageLinks);
    if (data.volumeInfo.imageLinks === undefined) {
        this.image = "https://i.imgur.com/J5LVHEL.jpg";
    } else {
        this.image = data.volumeInfo.imageLinks.thumbnail;
    }
    this.title = data.volumeInfo.title;
    this.authors = data.volumeInfo.authors;
    this.description = data.searchInfo.textSnippet;
}
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
