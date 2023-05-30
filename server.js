const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected to mongodb..."))
.catch((error)=>console.log(error));

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})
