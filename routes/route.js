/* A JavaScript file that is used to route the pages. */
const express = require("express");
const route = express.Router();
const multer = require("multer");
const path = require("path");

const appointment_data = require("../routines/appointment/main");
const read_appointment = require("../routines/appointment/read_appointment");
const add_appointment = require("../routines/appointment/add_appointment");

const add_client = require("../routines/client/add_client");
const read_client = require("../routines/client/read_client");
const update_client = require("../routines/client/update_client");
const delete_client = require("../routines/client/delete_client");
const login = require("../routines/client/login");

route
  .get("/", appointment_data)
  .post("/", add_appointment)
  .get("/appointment/details/:id", read_appointment);

route
  .get("/new-client", (req, res) => {
    res.render("new_client");
  })
  .post("/new-client", add_client)
  .get("/manage-clients", read_client)
  .post("/manage-clients", update_client)
  .get("/manage-clients/:id", delete_client);

//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "public/images/developer"); // directory name where save the file
  },
  filename: (req, file, callBack) => {
    const file_name = req.body.name.split(" ").join("-");
    callBack(
      null,
      file_name + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});

const add_developer = require("../routines/developer/add_developer");
const read_developer = require("../routines/developer/read_developer");
const update_developer = require("../routines/developer/update_developer");
const delete_developer = require("../routines/developer/delete_developer");

route
  .get("/new-developer", (req, res) => {
    res.render("new_developer", { user: req.session.user });
  })
  .post("/new-developer", upload.single("img_src"), add_developer);

route
  .get("/manage-developers", read_developer)
  .post("/manage-developers", update_developer)
  .get("/manage-developers/:id", delete_developer);

route
  .get("/login", (req, res) => {
    res.render("login", { invalid: false });
  })
  .post("/login", login);

const user_dashboard = require("../routines/appointment/user_dashboard");
route.get("/dashboard", user_dashboard);

route.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log("error in logout!");
    res.redirect("/login");
  });
});

module.exports = route;
