const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentShcema = mongoose.Schema({
  firstName : {type: String, required:true},
  lastName : {type: String, required:true},
  matricNumber : {type: String, required:true},
  email : {type: String, required:true, unique: true},
  password : {type: String, required:true},
  date : { type: Date, default: Date.now },
});

let saltRound = process.env.SALT_ROUND;

studentShcema.pre("save",function(next){
  bcrypt.hash(this.password, saltRound, (err, hashedPassword) => {
    if (err) {
      console.log("password couldn't be hashed")
    } else {
      this.password = hashedPassword;
      next();
    }
  });
});

studentShcema.methods.validatePassword = function(password,callback){
  bcrypt.compare(password, this.password, (err,same) => {
    if (!err) {
      callback(err,same)
    } else {
      next();
    }
  });
}

const studentModel = mongoose.model("All_students_db", studentShcema);

module.exports = studentModel;