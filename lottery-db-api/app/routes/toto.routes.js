module.exports = app => {
  const toto = require("../controllers/toto.controllers.js");

  // Retrieve all Customers
  app.get("/toto", toto.findAll);

  // Retrieve a single Customer with customerId
  app.get("/toto/:totoId", toto.findOne);


};