module.exports = app => {
  const FourD = require("../controllers/4d.controllers.js");

  // Retrieve all Customers
  app.get("/4d", FourD.findAll);

  // Retrieve a single Customer with customerId
  app.get("/4d/:FourDId", FourD.findOne);


};