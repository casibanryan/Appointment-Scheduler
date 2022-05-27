const con = require("../../database/connection");

const add_newClient = (req, res) => {
  const sql = "INSERT INTO client SET ?";
  con.query(sql, req.body, function (err) {
    if (err) console.log(`error query : ${err}`);
    res.redirect("/new-client");
  });
};

module.exports = add_newClient;
