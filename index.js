const express = require('express');

const app = express();
// Middlewares .. 
app.use(express.urlencoded({extended:false}));
app.get('/', (req,res)=>
{
    res.json({msg : "hello world !"})
})
app.listen(8000, () => {
    console.log(`Server started on port`);
});