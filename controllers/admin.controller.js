const adminModel = require("../models/admin.model");

const adminSignup = (req, res) => {
    res.send(req.body);
    const form = new adminModel(req.body);
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

const adminSignin = (req, res) => {
  const {adminEmail, password} = req.body;
  adminModel.findOne({email:adminEmail}, {firstName: 1, lastName: 1, email: 1, password: 1}).then((admin) => {
    if (admin){
      admin.validatePassword(password, (err, same) => {
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

module.exports = {adminSignup, adminSignin};