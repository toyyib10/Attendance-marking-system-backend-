const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const admin = require("./routes/admin.route");

const URI = process.env.MONGO_DB_URI;
const PORT = process.env.PORT;

mongoose.connect(URI).then(() => {
  console.log("Database connected successfully");
}).catch(() => {
  console.log("Connection unsuccessful");
})

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/admin",admin);


app.listen(PORT, (err)=>{
  if(!err){
    console.log(`Server started successfully`);
  } else{
    console.log("Server unable started successfully");
  }
})