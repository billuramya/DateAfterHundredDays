const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const date = new Date();
  const days = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${days.getDate()}/${days.getMonth() + 1}/${days.getFullYear()}`
  );
});
module.exports = app;
