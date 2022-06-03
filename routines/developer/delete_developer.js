const con = require("../../database/connection");

const delete_developer = (req, res) => {
  const developer_id = req.params.id;
  const sql = `DELETE FROM developer WHERE developer_id = ${developer_id}`;
  con.query(sql, (error) => {
    if (error) console.log(`Error query in deleting the developer => ${error}`);
    res.redirect("/manage-developers");
  });
};

module.exports = delete_developer;
