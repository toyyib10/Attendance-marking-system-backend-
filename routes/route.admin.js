const admin = require("express").Router();
const {adminSignup} = require("../controllers/controller.admin");

admin.post("/signup", adminSignup);

module.exports = admin;