const con = require("../../database/connection");

const user_dashboard = (req, res) => {
  var session = req.session.user;
  //! checking if the user is login or not if not redirect it again to the login page
  if (session) {
    const find_client = `SELECT * FROM client WHERE name = '${session}' OR email = '${session}'`;
    con.query(find_client, (err, rows) => {
      if (err) console.log(`Error query in displaying user dashboard ${err}`);
      const [{ client_id }] = JSON.parse(JSON.stringify(rows));

      const appointment_data = `SELECT * FROM appointment WHERE client_id = '${client_id}'; SELECT * FROM developer; SELECT * FROM category; SELECT * FROM venue`;
      con.query(appointment_data, (err, result) => {
        res.render("dashboard", {
          appointment_data: result[0],
          developer_data: result[1],
          category_data: result[2],
          venue_data: result[3],
          client_data: rows,
          user: session,
        });
      });
    });
  } else {
    res.redirect("/login"); // login
  }
};

module.exports = user_dashboard;
