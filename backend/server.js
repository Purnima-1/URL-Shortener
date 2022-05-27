const express = require('express')
const app = express()

app.get('/',(req,res) => res.send("Hello Url"))
// app.get('/register', (req,res) => )

app.listen(5000, () =>{
    console.log('Server running at port 5000');
    })