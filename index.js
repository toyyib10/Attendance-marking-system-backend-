const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, (err)=>{
  if(!err){
    console.log(`Server started successfully`);
  } else{
    console.log("Server unable started successfully");
  }
})