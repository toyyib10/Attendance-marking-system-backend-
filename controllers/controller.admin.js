const adminModel = require("../models/model.admin");

const adminSignup = (req, res) => {
    console.log(req.body);
    res.send(req.body);
    const form = new adminModel(req.body);
    form.save().then((result) => {
      res.status(200).send("Data has been saved successfully",result);
    }).catch((err) => {
      res.status(500).send("Data has not been saved");
    })
}

module.exports = {adminSignup}