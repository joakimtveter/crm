const express = require("express");
const app = express();

app.set("view-engine", "ejs");

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index.ejs", { siteTitle: "Home" })
});

app.get("/login", (req, res) => {
    res.render("login.ejs", { siteTitle: "Register" })
});

app.get("/add-user", (req, res) => {
    res.render("add-user.ejs", { siteTitle: "Add User" })
});

app.listen(3000);