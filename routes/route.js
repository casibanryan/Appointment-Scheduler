/* A JavaScript file that is used to route the pages. */
const express = require("express");
const route = express.Router();

const appointment_data = require("../routines/appointment/main");
const read_appointment = require("../routines/appointment/read_appointment");
const add_appointment = require("../routines/appointment/add_appointment");

const add_client = require("../routines/client/add_client");
const read_client = require("../routines/client/read_client");
const update_client = require("../routines/client/update_client");
const delete_client = require("../routines/client/delete_client");

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

module.exports = route;
