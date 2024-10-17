const student = require("express").Router();
const {studentSignup, studentSignin, markAttendance} = require("../controllers/student.controller");

student.post("/signup", studentSignup);
student.post("/signin", studentSignin);
student.post("/markAttendance", markAttendance);

module.exports = student;