const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const admin = require("./routes/route.admin")
const mongoose = require("mongoose");

const URI = process.env.MONGO_DB_URI;

mongoose.connect(URI).then(() => {
  console.log("Database connected successfully");
}).catch(() => {
  console.log("Connection unsuccessful");
})

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/admin",admin)

const PORT = process.env.PORT;

app.listen(PORT, (err)=>{
  if(!err){
    console.log(`Server started successfully`);
  } else{
    console.log("Server unable started successfully");
  }
})