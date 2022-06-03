//connection to the database
const con = require("../../database/connection");
con.connect();

const appointment_data = (req, res) => {
  var session = req.session.user;
  if (session) {
    const sql =
      "SELECT * FROM appointment ORDER BY date DESC; SELECT * FROM client ; SELECT * FROM developer; SELECT * FROM venue; SELECT * FROM category";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.render("index", {
        appointment_data: result[0],
        client_data: result[1],
        developer_data: result[2],
        venue_data: result[3],
        category_data: result[4],
        user: session,
      });
    });
  } else {
    res.redirect("/login"); // login
  }
};

module.exports = appointment_data;
