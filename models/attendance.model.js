const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema({
  firstName : {type: String, required:true},
  lastName : {type: String, required:true},
  matricNumber : {type: String, required:true},
})

const createSchema = mongoose.Schema({
  studentAttendance : [attendanceSchema],
  locationData : { latitude:{type: Number, required: true}, longitude:{type: Number, required:true}},
  classTime : {type: String},
  classPin : {type: String},
  course : {type: String},
  email : {type: String, required:true},
  date : { type: Date, default: Date.now },
});


const attendanceModel = mongoose.model("All_attendance_db", createSchema);

module.exports = attendanceModel;
// createModel.updateOne(,{$push: {}})