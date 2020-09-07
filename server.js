const express = require("express");
const app = express();
const superagent = require("superagent");
const pg = require("pg");
require("dotenv").config();
// express setup
const PORT = process.env.PORT || 3000;
const client = new pg.Client(process.env.DATABASE_URL);
app.use(express.static("./public"));
app.use(express.urlencoded());
app.set("view engine", "ejs");
// routes

app.get("/", (req, res) => {
    const SQL = `SELECT * FROM books`;
    client.query(SQL).then(({ rows }) => {
        console.log(rows);
        res.render("./pages/index", { books: rows });
    });
});
app.get("/searches/new", (req, res) => {
    res.render("./pages/searches/new");
});
// set it back to post not get ####### reminder
app.post("/searches", (req, res) => {
    // console.log("test", req.body);
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.search}+${req.body.option}`;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.option}:${req.body.search}`;

    // console.log(url);
    superagent.get(url).then(({ body }) => {
        const books = body.items.map((book) => new Books(book));
        res.render("pages/searches/show", { books });
    });
});
function Books(data) {
    if (data.volumeInfo.imageLinks === undefined) {
        this.image_url = "https://i.imgur.com/J5LVHEL.jpg";
    } else {
        this.image_url = data.volumeInfo.imageLinks.thumbnail;
    }
    this.title = data.volumeInfo.title;
    this.authors = data.volumeInfo.authors;
    this.description = data.volumeInfo.description;
    this.isbn = data.volumeInfo.industryIdentifiers[0].identifier;
}
// addBooks
app.post("/addBook", (req, res) => {
    // console.log(req.body);
    const { title, image_url, author, isbn, description } = req.body;
    safeValues = [title, image_url, author, isbn, description];
    const SQL = `INSERT INTO books (title, image_url, author, isbn, description) VALUES ($1,$2,$3,$4,$5)`;
    client
        .query(SQL, safeValues)
        .then((results) => {
            // console.log("sssssssssssssssss", results);
            res.render("pages/books/details", { book: req.body });
        })
        .catch((err) => {
            res.redirect("/");
        });
});
// get book by id
app.get("/books/:id", (req, res) => {
    // req.params.id
    const value = [req.params.id];
    const SQL = `SELECT * FROM books WHERE id = $1`;
    client.query(SQL, value).then(({ rows }) => {
        rows[0].description = fixStr(rows[0].description);
        res.render("pages/books/details", { book: rows[0] });
    });
});
app.use("*", (req, res) => {
    res.status(404).send("NOT FOUND");
});

app.use((error, req, res) => {
    res.render("pages/error");
});

function fixStr(str) {
    let index = str.indexOf(`"`);
    str = str.substring(index + 1);
    index = str.indexOf(`"`);
    str = str.substring(0, index).trim();
    console.log(str);
    return str;
}

client.connect().then(() => {
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
});
