const express = require("express");

const app = express();

app.get('/', (_req, res) => {
  res.send({ hello_dude: 200 });
});

app.listen(3000)
