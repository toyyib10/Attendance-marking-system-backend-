const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema({
  firstName : {type: String},
  lastName : {type: String},
  matricNumber : {type: String},
})

const createSchema = mongoose.Schema({
  studentAttendance : [attendanceSchema],
  locationData : { latitude:{type: Number}, longitude:{type: Number}},
  classTime : {type: String},
  classPin : {type: String},
  course : {type: String},
  email : {type: String, required:true},
  date : { type: Date, default: Date.now },
});


const attendanceModel = mongoose.model("All_attendance_db", createSchema);

module.exports = attendanceModel;
// createModel.updateOne(,{$push: {}})