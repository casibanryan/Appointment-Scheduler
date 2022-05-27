const con = require("../../database/connection");

const delete_client = (req, res) => {
  const client_id = req.params.id;
  const sql = `DELETE FROM client WHERE client_id = ${client_id}`;
  con.query(sql, (error) => {
    if (error) console.log(`Error query ${error}`);
    res.redirect("/manage-clients");
  });
};

module.exports = delete_client;
