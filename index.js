const express = require('express');
const ejs = require("ejs")
const path = require("path")
const app = express();
// Middlewares .. 
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs")
app.set("view path",path.resolve("./views") )


app.get("/", (req, res) => {

    res.render("home");

})
app.listen(8000, () => {
    console.log(`Server started on port`);
});