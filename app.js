var express = require("express");

const app = express();

app.get("../", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

app.listen(300);

module.exports = app;
