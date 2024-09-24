const studentModel = require("../models/student.model");

const studentSignup = (req, res) => {
    res.send(req.body);
    const form = new studentModel(req.body);
    form.save().then((result) => {
      res.status(200).send("Data has been saved successfully",result);
    }).catch((err) => {
      if (err.code == 11000) {
        res.status(550).send("Email already exist");
      } else {
        res.status(500).send("Data has not been saved");
      }
    })
}

const studentSignin = (req, res) => {
  const {studentEmail, password} = req.body;
  studentModel.findOne({email:studentEmail}, {firstName: 1, lastName: 1, email: 1, password: 1}).then((student) => {
    if (student){
      student.validatePassword(password, (err, same) => {
        if (!same) {
          res.status(554).send("invalid email or password");
        } else {
          res.status(200).send("sign in successful");

        }
      })
    }
  }).catch((err) => {
    res.status(554).send("invalid email or password");
  });
}

module.exports = {studentSignup, studentSignin};