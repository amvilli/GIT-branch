const express = require('express');
const path = require("path")
const app = express();
// Middlewares .. 
app.use(express.urlencoded({ extended: false }));

app.set("view engine ", "ejs")
app.set("view engine",path.resolve("./view") )

app.get("/", (req, res) => {
    res.render("home");

})
app.listen(8000, () => {
    console.log(`Server started on port`);
});