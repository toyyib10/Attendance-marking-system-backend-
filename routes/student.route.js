const student = require("express").Router();
const {studentSignup, studentSignin} = require("../controllers/student.controller");

student.post("/signup", studentSignup);
student.post("/signin", studentSignin);

module.exports = student;