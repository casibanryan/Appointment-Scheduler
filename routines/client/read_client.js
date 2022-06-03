const con = require("../../database/connection");

const read_clients = (req, res) => {
  var session = req.session.user;

  if (session) {
    const sql = "SELECT * FROM client";
    con.query(sql, (err, results) => {
      if (err) console.log(`error query in viewing client data : ${err}`);
      res.render("manage_clients", { client_data: results, user: session });
    });
  }
};

module.exports = read_clients;
