const con = require("../../database/connection");

const update_developer = (req, res) => {
  const developer_id = req.body.developer_id;
  const name = req.body.name;
  const position = req.body.position;
  const email = req.body.email;
  const home_phone = req.body.home_phone;
  const mobile_phone = req.body.mobile_phone;

  const sql = `UPDATE developer SET name = '${name}', position = '${position}', email = '${email}', home_phone = '${home_phone}', mobile_phone = '${mobile_phone}' WHERE developer_id = '${developer_id}'`;
  con.query(sql, (err) => {
    if (err) console.log(`error query in updating the developer : ${err}`);
    res.redirect("/manage-developers");
  });
};

module.exports = update_developer;
