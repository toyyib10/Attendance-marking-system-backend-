const studentModel = require("../models/student.model");

const studentSignup = (req, res) => {
    const form = new studentModel(req.body);
    form.save().then((result) => {
      res.status(200).send(result);
    }).catch((err) => {
      if (err.code == 11000) {
        res.status(550).send("Email already exist");
      } else {
        res.status(500).send("Data has not been saved");
      }
    })
}

const studentSignin = (req, res) => {
  studentModel.findOne({email: req.body.email}, {firstName: 1, lastName: 1, email: 1, password: 1, matricNumber: 1, _id: 0}).then((student) => {
    if (student){
      student.validatePassword(req.body.password, (err, same) => {
        if (!same) {
          res.status(554).send("invalid email or password");
        } else {
          res.status(200).send(student);
        }
      })
    }
  }).catch((err) => {
    res.status(500).send("An error has occurred");
  });
}

module.exports = {studentSignup, studentSignin};