const con = require("../../database/connection");

const read_developers = (req, res) => {
  var session = req.session.user;

  if (session) {
    const sql = "SELECT * FROM developer";
    con.query(sql, (err, results) => {
      if (err)
        console.log(`error query in viewing the developer data : ${err}`);
      res.render("manage_developers", {
        developer_data: results,
        user: session,
      });
    });
  } else {
    res.redirect("/login");
  }
};

module.exports = read_developers;
