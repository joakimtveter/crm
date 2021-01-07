const express = require("express");
const app = express();

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.get("/login", (req, res) => {
    res.render("login.ejs")
});

app.get("/add-user", (req, res) => {
    res.render("add-user.ejs")
});

app.listen(3000);