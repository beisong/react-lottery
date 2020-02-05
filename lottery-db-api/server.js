const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');


const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to react lottery application." });
});

// require("./app/routes/customer.routes.js")(app);
require("./app/routes/toto.routes.js")(app);
require("./app/routes/4d.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});