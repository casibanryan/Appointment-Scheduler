const con = require("../../database/connection");

const read_clients = (req, res) => {
  const sql = "SELECT * FROM client";
  con.query(sql, (err, results) => {
    if (err) console.log(`error query : ${err}`);
    res.render("manage_clients", { client_data: results });
  });
};

module.exports = read_clients;
