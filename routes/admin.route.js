const admin = require("express").Router();
const {adminSignup, adminSignin, adminCreate} = require("../controllers/admin.controller");

admin.post("/signup", adminSignup);
admin.post("/signin", adminSignin);
admin.post("/createClass",adminCreate);

module.exports = admin;