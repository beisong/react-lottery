const FourD = require("../models/4d.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  FourD.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving 4D."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  FourD.findById(req.params.FourDId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found 4D Draw with id ${req.params.FourDId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving 4D Draw with id " + req.params.FourDId
        });
      }
    } else res.send(data);
  });
};
