const express = require("express");
const app = express();

app.set("view-engine", "ejs");

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index.ejs", { siteTitle: "Home" })
});

app.get("/login", (req, res) => {
    res.render("login.ejs", { siteTitle: "Login" })
});

// TODO: ADD LOG IN LOGIC

app.get("/add-user", (req, res) => {
    res.render("add-user.ejs", { siteTitle: "Add User" })
});
app.post("/add-user", (req, res) => {
 // TODO: ADD ADD USER LOGIC
});

app.get("/contacts", (req, res) => {
    res.render("contacts.ejs", { siteTitle: "Contact list" })
});

app.get("/companies", (req, res) => {
    res.render("companies.ejs", { siteTitle: "Company list" })
});

//TODO: ADD LOG OUT LOGIC

app.listen(3000);