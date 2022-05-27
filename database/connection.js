const mysql = require("mysql");

// create a connection to our database
const connect_db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "appointment_db",
  debug: false,
  multipleStatements: true,
});

module.exports = connect_db;
