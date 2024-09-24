const mongoose = require("mongoose");

const createShcema = mongoose.Schema({
  studentAttendance : [],
  locationData : {},
  email : {type: String, required:true},
  date : { type: Date, default: Date.now },
});