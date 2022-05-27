const con = require("../../database/connection");

const read_appointment = (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT * FROM appointment WHERE appointment_id = ?; SELECT * FROM client; SELECT * FROM appointment";

  con.query(sql, [id], (err, results) => {
    if (err) console.log(`error query : ${err}`);
    res.render("appointment_details.ejs", {
      appointment_details: results[0],
      client_data: results[1],
      appointment_history: results[2],
    });
  });
};

module.exports = read_appointment;
