const { Router } = require("express");

const router = Router();

router.get("/some-route", async (req, res) => {
  try {
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
