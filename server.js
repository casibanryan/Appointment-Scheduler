// library
const body_parser = require("body-parser");
const express = require("express");
const app = express();
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

// set view engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static(__dirname + "/public"));
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

// load routes
app.use("/", require("./routes/route"));

const port = process.env.PORT || 8888;

/* Telling the server to listen on port 8888. */
app.listen(port, () => {
  console.log(`Server listening on port http:localhost:${port}`);
});
