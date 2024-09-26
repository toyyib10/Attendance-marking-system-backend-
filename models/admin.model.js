const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = mongoose.Schema({
  firstName : {type: String, required:true},
  lastName : {type: String, required:true},
  email : {type: String, required:true, unique: true},
  password : {type: String, required:true},
  date : { type: Date, default: Date.now },
});

let saltRound = 10;

adminSchema.pre("save",function(next){
  bcrypt.hash(this.password, saltRound, (err, hashedPassword) => {
    if (err) {
      console.log(err)
    } else {
      this.password = hashedPassword;
      next();
    }
  });
});

adminSchema.methods.validatePassword = function(password,callback){
  bcrypt.compare(password, this.password, (err,same) => {
    if (!err) {
      callback(err,same)
    } else {
      next();
    }
  });
}

const adminModel = mongoose.model("All_admins_db", adminSchema);

module.exports = adminModel;