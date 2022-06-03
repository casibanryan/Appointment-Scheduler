const con = require("../../database/connection");

const read_appointment = (req, res) => {
  var session = req.session.user;
  if (session) {
    const id = req.params.id;
    const sql =
      "SELECT * FROM appointment WHERE appointment_id = ?; SELECT * FROM client; SELECT * FROM appointment; SELECT * FROM developer";

    con.query(sql, [id], (err, results) => {
      if (err) console.log(`error query : ${err}`);
      res.render("appointment_details.ejs", {
        appointment_details: results[0],
        client_data: results[1],
        appointment_history: results[2],
        developer_data: results[3],
        user: session,
      });
    });
  } else {
    res.redirect("/login");
  }
};

module.exports = read_appointment;
