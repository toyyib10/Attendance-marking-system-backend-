const mongoose = require("mongoose");

const createShcema = mongoose.Schema({
  studentAttendance : [],
  locationData : {},
  classTime: {type: String},
  email : {type: String, required:true},
  date : { type: Date, default: Date.now },
});