const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
require("dotenv").config();
const routes = require("./routes/TodoRoute");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected to mongodb..."))
.catch((error)=>console.log(error));

app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})
