const express = require("express");
const app = express();

// setting to make ejs as view engine
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/new-client", (req, res) => {
  res.render("new_client.ejs");
});

app.get("/manage-clients", (reg, res) => {
  res.render("manage_clients.ejs");
});

app.get("/client-details", (req, res) => {
  res.render("client_details.ejs");
});

/* Telling the server to use the public folder as the static folder. */
app.use(express.static("public"));

const port = 8888;

/* Telling the server to listen on port 8080. */
app.listen(port, () => {
  console.log(`Server listening on port http:localhost:${port}`);
});
