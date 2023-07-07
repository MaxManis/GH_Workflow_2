const express = require("express");

const app = express();

app.get('/', (_req, res) => {
  res.send({ hello_dude: 200 });
});

app.get('/test', (_req, res) => {
  res.send({ hello_to_github: 201 });
});

app.listen(3000)
