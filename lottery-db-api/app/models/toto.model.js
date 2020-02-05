const sql = require("./db.js");

// constructor
const Toto = function(customer) {
};

Toto.getAll = result => {
  sql.query("SELECT * FROM toto", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

Toto.findById = (totoId, result) => {
  sql.query(`SELECT * FROM toto WHERE DrawNo = ${totoId}`, (err, res) => {
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


module.exports = Toto;