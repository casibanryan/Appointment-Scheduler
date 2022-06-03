const con = require("../../database/connection");

const login = (req, res) => {
  const credential = {
    email: "admin",
    password: "password",
  };
  const username = req.body.username;
  const password = req.body.password;

  const sql = `SELECT * FROM client WHERE (name = '${username}' OR email = '${username}') AND (password = '${password}')`;
  con.query(sql, (err, result) => {
    if (err) console.log(`error query in login ${err}`);
    if (username == credential.email && password == credential.password) {
      req.session.user = username;
      res.redirect("/");
    } else if (!err && result.length >= 1) {
      req.session.user = username;
      res.redirect("/dashboard");
    } else {
      res.render("login", { invalid: true });
    }
  });
};

module.exports = login;
