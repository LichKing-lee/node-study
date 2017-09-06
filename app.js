const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const pug = require("pug");

app.locals.pretty = true;
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("./public"));
// app.use(bodyParser.urlencoded({ extended:false }));

app.get("/", (req, res) => {
    res.render("first", {
        variable1: "Hello Variable"
    });
});

app.post("/insert", (req, res) => {
    console.log(req);
    res.send(req.body.title + " :: " + req.body.content);
});

app.get("/query", (req, res) => {
    res.send(req.query.name);
});

app.get("/path/:variable", (req, res) => {
    res.send(req.params.variable);
});

app.listen(3000, () => console.log("Hello NodeJS"));