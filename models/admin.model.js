const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminShcema = mongoose.Schema({
  firstName : {type: String, required:true},
  lastName : {type: String, required:true},
  email : {type: String, required:true, unique: true},
  password : {type: String, required:true},
  date : { type: Date, default: Date.now },
});

let saltRound = process.env.SALT_ROUND;

adminShcema.pre("save",function(next){
  bcrypt.hash(this.password, saltRound, (err, hashedPassword) => {
    if (err) {
      console.log("password couldn't be hashed")
    } else {
      this.password = hashedPassword;
      next();
    }
  });
});

const adminModel = mongoose.model("All_admins_db", adminShcema);

module.exports = adminModel;