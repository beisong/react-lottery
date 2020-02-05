const sql = require("./db.js");

// constructor
const FourD = function(customer) {
};

FourD.getAll = result => {
  sql.query("SELECT * FROM 4d", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

FourD.findById = (FourDId, result) => {
  sql.query(`SELECT * FROM 4d WHERE DrawNo = ${FourDId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Draw: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Draw with the id
    result({ kind: "not_found" }, null);
  });
};


module.exports = FourD;