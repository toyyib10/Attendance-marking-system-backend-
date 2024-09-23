const mongoose = require("mongoose");

const adminShcema = mongoose.Schema({
  firstName : {type: String, required:true},
  lastName : {type: String, required:true},
  email : {type: String, required:true, unique: true},
  password : {type: String, required:true},
  date : { type: Date, default: Date.now },
});
const adminModel = mongoose.model("All_admins_db", adminShcema);

module.exports = adminModel;