const con = require("../../database/connection");

const add_appointment = (req, res) => {
  const sql = "INSERT INTO appointment SET ?";
  con.query(sql, req.body, function (err) {
    if (err) console.log(`error query : ${err}`);
    res.redirect("/");
  });
};

module.exports = add_appointment;
