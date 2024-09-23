const admin = require("express").Router();
const {adminSignup, adminSignin} = require("../controllers/admin.controller");

admin.post("/signup", adminSignup);
admin.post("/signin", adminSignin);

module.exports = admin;