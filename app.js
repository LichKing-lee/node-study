const express = require("express");
const app = express();
const pug = require("pug");

app.locals.pretty = true;
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("first", {
        variable1: "Hello Variable"
    });
});

app.listen(3000, () => console.log("Hello NodeJS"));