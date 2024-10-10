const admin = require("express").Router();
const {adminSignup, adminSignin, createAttendance, startAttendance, getAllAttendance} = require("../controllers/admin.controller");

admin.post("/signup", adminSignup);
admin.post("/signin", adminSignin);
admin.post("/createAttendance",createAttendance);
admin.put("/startAttendance", startAttendance);
admin.get("/allAttendance", getAllAttendance);

module.exports = admin;