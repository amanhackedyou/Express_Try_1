const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Listening Home page
app.get("/", (req, res) => {
    res.status(200).send("<h1>This is Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.status(200).send("<h1>This is About Page</h1>");
});

app.get("/contact", (req, res) => {
    res.status(200).send("<h1>This is Contact Page</h1>");
});

app.get("/services", (req, res) => {
    res.status(200).send("<h1>This is Services Page</h1>");
});

app.get("*", (req, res) => {
    res.status(404).send("<h1>ERR: 404 - Page `"+req.url+"` not found.</h1>");
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}...`);
});