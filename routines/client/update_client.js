const con = require("../../database/connection");

const update_client = (req, res) => {
  const client_id = req.body.client_id;
  const sql = `UPDATE client SET ? WHERE client_id = ${client_id}`;
  con.query(sql, [req.body], (err) => {
    if (err) console.log(`error query : ${err}`);
    res.redirect("/manage-clients");
  });
};

module.exports = update_client;
