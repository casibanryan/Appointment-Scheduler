// library
const body_parser = require("body-parser");
const express = require("express");
const app = express();

// set view engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static(__dirname + "/public"));
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

// load routes
app.use("/", require("./routes/route"));

const port = 8888;

/* Telling the server to listen on port 8080. */
app.listen(port, () => {
  console.log(`Server listening on port http:localhost:${port}`);
});
