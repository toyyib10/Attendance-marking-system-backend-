const adminModel = require("../models/admin.model");
const attendanceModel = require("../models/attendance.model");

const adminSignup = (req, res) => {
    const form = new adminModel(req.body);
    form.save().then((result) => {
      res.status(200).send(result);
    }).catch((err) => {
      if (err.code == 11000) {
        res.send("Email already exist");
      } 
      else {
        res.status(500).send("Data has not been saved");
      }
    });
}

const adminSignin = (req, res) => {
  adminModel.findOne({email:req.body.email}, {firstName: 1, lastName: 1, email: 1, password: 1, _id: 0}).then((admin) => {
    if (admin){
      admin.validatePassword(req.body.password, (err, same) => {
        if (!same) {
          res.status(554).send("invalid email or password");
        } else {
          res.status(200).send(admin);
        }
      })
    } else {
      res.status(554).send("invalid email or password");
    }
  }).catch((err) => {
    res.status(500).send("An error has occurred");
  });
}

const adminCreate = (req, res) => {
  console.log(req.body.locationData)
  const form = new attendanceModel(req.body);
  form.save().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(500).send(err);
  });
}

module.exports = {adminSignup, adminSignin, adminCreate};