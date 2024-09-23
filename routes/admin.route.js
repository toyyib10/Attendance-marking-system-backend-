const admin = require("express").Router();
const {adminSignup} = require("../controllers/admin.controller");

admin.post("/signup", adminSignup);

module.exports = admin;