const admin = require("express").Router();
const {adminSignup, adminSignin, adminCreate} = require("../controllers/admin.controller");

admin.post("/signup", adminSignup);
admin.post("/signin", adminSignin);
admin.post("/createAttendance",adminCreate);

module.exports = admin;